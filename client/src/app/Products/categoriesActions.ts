import CategoryApi from '@/api/categoryApi';
import { BaseModel, Categories } from '@/models';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCategories = createAsyncThunk('app/category', async (data, { rejectWithValue }) => {
    const response: unknown = await CategoryApi.getAllCategory();
    const typeResponse = response as BaseModel<Categories>;
    return typeResponse;
});
