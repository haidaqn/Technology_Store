import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';
import { User } from 'src/modules/User/Models/user.model';

@Injectable()
export class IsAdminMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const user = req['user'] as User;
        if (!user || user.role !== 2003)
            return res.status(401).json({
                success: false,
                message: 'No admin ..'
            });
        next();
    }
}

@Injectable()
export class VerifyAccessTokenMiddleware implements NestMiddleware {
    // constructor(private readonly jwtService: JwtService) {}
    async use(req: Request, res: Response, next: NextFunction) {
        if (req?.headers?.authorization?.startsWith('Bearer')) {
            const token = req.headers.authorization.split(' ')[1];
            // const decoded = await this.jwtService.verifyAsync(token);
            // console.log(decoded);
            // try {
            //     console.log(1234);
            //     // const decoded = await this.authService.verifyAccessToken(token);
            //     // req['user'] = decoded;
            //     next();
            // } catch (err) {
            //     console.error(err);
            //      return res.status(401).json({ err: 1, msg: 'Require authentication !' });
            // }
            next();
        } else {
            return res.status(404).json({ err: 1, msg: 'Missing token !' });
        }
    }
}
