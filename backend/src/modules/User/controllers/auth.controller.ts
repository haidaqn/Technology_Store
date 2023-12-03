import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { CreateUserDto, EmailDto, LoginUserDto } from '../dto/user.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return await this.authService.register(createUserDto);
    }

    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto) {
        return await this.authService.login(loginUserDto);
    }

    @Post('refresh')
    async refresh(@Body() body) {
        return await this.authService.refresh(body.refresh_token);
    }

    @Get('findEmailUser')
    async findEmailUser(@Query('email') email: string) {
        return await this.authService.checkEmailUser(email);
    }

    @Post('sendCodeVerify')
    async sendCodeVerify(@Body() { email }: EmailDto) {
        return await this.authService.sendCodeVerify(email);
    }

    @Post('logout')
    async logout(@Req() req: any) {
        await this.logout(req.user);
        return {
            statusCode: 200
        };
    }
}
