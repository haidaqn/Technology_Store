import axiosClient from './axiosClient';
import { LoginForm, RegisterForm } from '@/models';
const authApi = {
    login(data: LoginForm) {
        const url = 'auth/login';
        return axiosClient.post(url, data);
    },
    register(data: RegisterForm) {
        const url = 'auth/register';
        return axiosClient.post(url, data);
    },
};
export default authApi;
