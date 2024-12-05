import { model, Schema } from 'mongoose';

export interface Blog {
  title: string;
  body: string;
  author: string;
  date: Date;
}

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const BlogModel = model('Blog', BlogSchema);
