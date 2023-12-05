import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './Models/order.model';
import { OrderRepository } from './Repositories/coupon.repository';
import { OrderService } from './Services/order.service';
import { OrderController } from './controllers/order.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }])],
    controllers: [OrderController],
    providers: [OrderService, OrderRepository],
    exports: []
})
export class OrderModule {}
