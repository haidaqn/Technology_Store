import { Schema, Document } from 'mongoose';

const BlogSchema = new Schema(
    {
        title: { type: String, require: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        numberViews: { type: Number, default: 0 },
        likes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true
            }
        ],
        disLiked: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true
            }
        ],
        image: {
            type: String,
            default: 'https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png'
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true,
        collection: 'Blog'
    }
);

export { BlogSchema };

export interface Blog extends Document {
    title: string;
    description: string;
    category: string;
    numberViews: number;
    likes: number;
    disLiked: number;
    image: string;
    author: string;
}
