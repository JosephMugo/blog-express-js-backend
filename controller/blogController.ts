import { NextFunction, Request, Response } from 'express';
import blogService from '../service/blogService';
import { Blog } from '../schema/blogSchema';

const getBlogById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.info('Getting blog with id:', req.params.id);
    const blogId: string = req.params.id;
    const result = await blogService.getBlogById(blogId);
    res.status(200).send(result);
    return;
  } catch (err) {
    console.error('Error while getting blog:', err);
    next(err);
  }
};

const getBlogs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.info('Getting blogs');
    const result = await blogService.getBlogs();
    res.status(200).send(result);
    return;
  } catch (err) {
    console.error('Error while getting blogs:', err);
    next(err);
  }
};

const createBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.info('Creating blog');
    const newBlog = req.body;
    const result = await blogService.createBlog(newBlog);
    res.status(201).send(result);
    return;
  } catch (err) {
    console.error('Error while creating blog:', err);
    next(err);
  }
};

const editBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.info('Editing blog with id:', req.params.id);
    const blogId: string = req.params.id;
    const newBlogInfo: Blog = req.body;
    const result = await blogService.editBlog(blogId, newBlogInfo);
    res.status(200).send(result);
    return;
  } catch (err) {
    console.error('Error while editing blog:', err);
    next(err);
  }
};

const deleteBlogById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.info('Deleting blog with id:', req.params.id);
    const blogId: string = req.params.id;
    const result = await blogService.deleteBlogById(blogId);
    res.status(200).send(result);
    return;
  } catch (err) {
    console.error('Error while getting blog:', err);
    next(err);
  }
};

export default {
  getBlogById,
  getBlogs,
  createBlog,
  editBlog,
  deleteBlogById,
};
