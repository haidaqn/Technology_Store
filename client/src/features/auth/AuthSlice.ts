import { LoginForm, PayLoad, RegisterForm, User } from '@/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    logging?: boolean;
    registering?: boolean;
    actionAuth: 'No action' | 'Success' | 'Failed';
    currentUser?: {
        data: User;
        token: string;
    };
}

const initialState: AuthState = {
    logging: false,
    registering: false,
    actionAuth: 'No action',
    currentUser: undefined,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginForm>) {
            state.logging = true;
            state.actionAuth = 'No action';
        },

        loginSuccess(state, action: PayloadAction<PayLoad>) {
            state.logging = false;
            state.actionAuth = 'Success';
            state.currentUser = action.payload;
        },
        loginFailed(state) {
            state.logging = false;
            state.actionAuth = 'Failed';
        },
        register(state, action: PayloadAction<RegisterForm>) {
            state.registering = true;
            state.actionAuth = 'No action';
        },
        registerSuccess(state, action: PayloadAction<PayLoad>) {
            state.registering = false;
            state.actionAuth = 'Success';
            state.currentUser = action.payload;
        },
        registerFailed(state) {
            state.registering = false;
            state.actionAuth = 'Failed';
        },
        logout(state) {
            state.logging = false;
            state.registering = false;
            state.actionAuth = 'No action';
            state.currentUser = undefined;
        },
        resetAction(state) {
            state.actionAuth = 'No action';
        },
        // ...các action khác
    },
});

export const authActions = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
