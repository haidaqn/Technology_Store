export interface LoginForm {
    email: string;
    password: string;
}

export interface RegisterForm {
    email: string;
    name: string;
    mobile: string;
    password: string;
    passwordConfirm: string;
}

export interface User {
    name: string;
    password: string;
    email: string;
    mobile: string;
    avatar: string;
    address: string;
    role: number;
    cart: [
        {
            product: string;
            quantity: number;
            color: string;
        }
    ];
    isBlocked: boolean;
}
