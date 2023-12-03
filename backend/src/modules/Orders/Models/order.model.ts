import { Schema, Document } from 'mongoose';

const OrderSchema = new Schema(
    {
        products: [
            {
                product: { type: Schema.Types.ObjectId, ref: 'Product' },
                count: Number,
                color: {
                    type: String,
                    default: 'black'
                }
            }
        ],
        status: {
            type: String,
            default: 'Processing',
            enum: ['Cancelled', 'Processing', 'Success']
        },
        total: Number,
        coupon: {
            type: Schema.Types.ObjectId,
            ref: 'Coupon'
        },
        orderBy: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    {
        timestamps: true,
        collection: 'Order'
    }
);

export { OrderSchema };

export interface Order extends Document {
    products: string[];
    status: string;
    total: number;
    coupon: string;
    orderBy: string;
}
