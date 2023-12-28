import ProductApi from '@/api/productApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BaseModel, Product } from '@/models';

export const getNewProducts = createAsyncThunk(
    'product/newProducts',
    async (data, { rejectWithValue }) => {
        const response: unknown = ProductApi.getProduct({ page: 1, limit: 6 });
        const typeResponse = response as BaseModel<Product>;
        return typeResponse;
    }
);

export const getSoldProducts = createAsyncThunk(
    'product/soldProducts',
    async (data, { rejectWithValue }) => {
        const response: unknown = ProductApi.getProduct({ page: 1, limit: 6, sold: true });
        const typeResponse = response as BaseModel<Product>;
        return typeResponse;
    }
);
