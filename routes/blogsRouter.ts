import express from 'express';
import blogController from '../controller/blogController';

const blogsRouter = express.Router();

blogsRouter.get('/:id', blogController.getBlogById);
blogsRouter.get('/', blogController.getBlogs);
blogsRouter.post('/', blogController.createBlog);
blogsRouter.patch('/:id', blogController.editBlog);
blogsRouter.delete('/:id', blogController.deleteBlogById);

export default blogsRouter;
