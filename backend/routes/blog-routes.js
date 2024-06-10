import express from 'express';
import { getAllBlogs, addBlog, updateBlog, getById, deleteBlog, getByUserId} from '../controllers/blog-controller.js';
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs); //get all blogs
blogRouter.post("/add", addBlog); //add a blog
blogRouter.put("/update/:id",updateBlog); //update a blog
blogRouter.get("/:id", getById); //get a blog by id
blogRouter.delete("/:id", deleteBlog); //delete a blog
blogRouter.get("/user/:id",getByUserId); //get all blogs by a user

export default blogRouter;