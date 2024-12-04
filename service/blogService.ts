import { Blog, BlogModel } from '../schema/blogSchema';
import mongoose from 'mongoose';

const getBlogById = async (blogId: string) => {
  return await BlogModel.findById({ _id: new mongoose.Types.ObjectId(blogId) });
};

const getBlogs = async () => {
  return await BlogModel.find({});
};

const createBlog = async (blog: Blog) => {
  return await BlogModel.create(blog);
};

const editBlog = async (id: string, blog: Blog) => {
  await BlogModel.findByIdAndUpdate(id, blog);
  const updatedBlog = await getBlogById(id);
  return updatedBlog;
};

const deleteBlogById = async (blogId: string) => {
  return await BlogModel.findByIdAndDelete(blogId);
};

export default {
  getBlogById,
  getBlogs,
  createBlog,
  editBlog,
  deleteBlogById,
};
