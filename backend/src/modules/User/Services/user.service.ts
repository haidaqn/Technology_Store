import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from '../dto/user.dto';
import { UserRepository } from '../repositories/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async createUser(userDto: CreateUserDto) {
        userDto.password = await bcrypt.hash(userDto.password, 10);
        const userInDb = await this.userRepository.findByCondition({
            email: userDto.email
        });
        if (userInDb) {
            throw new HttpException('Email already used to register', HttpStatus.BAD_REQUEST);
        }
        return await this.userRepository.create(userDto);
    }

    findByLogin = async ({ email, password }: LoginUserDto) => {
        const user = await this.userRepository.findByCondition({
            email: email
        });
        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
        }
        const is_equal = bcrypt.compareSync(password, user.password);
        if (!is_equal) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }
        return user;
    };

    findByEmail = async (email: string) => {
        return await this.userRepository.findByCondition({
            email: email
        });
    };

    update = async (filter: any, update: any) => {
        if (update.refreshToken) {
            update.refreshToken = await bcrypt.hash(this.reverse(update.refreshToken), 10);
        }

        return await this.userRepository.findByConditionAndUpdate(filter, update);
    };

    getUserByRefresh = async (refresh_token: string, email: string) => {
        const user = await this.findByEmail(email);
        if (!user) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }

        const is_equal = await bcrypt.compare(this.reverse(refresh_token), user.refreshToken);

        if (!is_equal) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }

        return user;
    };

    private reverse(s: string) {
        return s.split('').reverse().join('');
    }
}
