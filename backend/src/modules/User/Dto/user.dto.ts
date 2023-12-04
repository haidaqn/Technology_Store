import { IsNotEmpty } from 'class-validator';
import { User } from '../Models/user.model';

export class CreateUserDto {
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    mobile: number;
    @IsNotEmpty()
    codeVerify: number;
}

export class LoginUserDto {
    @IsNotEmpty() email: string;
    @IsNotEmpty() password: string;
}

export class EmailDto {
    @IsNotEmpty()
    email: string;
}

export interface AuthResponse {
    data: User;
    token: string;
}

export interface AuthResponseRegister {
    email: string;
    token: string;
}
