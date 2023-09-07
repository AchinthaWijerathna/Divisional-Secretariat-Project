const express = require('express');

const Posts = require('../models/posts');

const router = express.Router();


//save posts

router.post('/post/save', async (req, res) => {
    let newPost = new Posts(req.body);
  
    try {
      await newPost.save();
      res.status(200).json({
        success: "Posts saved Successfully"
      });
    } catch (err) {
      res.status(400).json({
        error: err
      });
    }
  });


  //get posts
  router.get('/posts', async (req, res) => {
    try {
      const posts = await Posts.find().exec();
      res.status(200).json({
        success: true,
        existingPosts: posts
      });
    } catch (err) {
      res.status(400).json({
        error: err
      });
    }
  });

  //get specific posts
  router.get("/post/:id",(req,res)=>{
    let postId = req.params.id;
  
    Posts.findById(postId)
      .then(post => {
        return res.status(200).json({
          success:true,
          post
        });
      })
      .catch(err => {
        return res.status(400).json({success:false,err});
      });
  });
  
  

  //update posts
  router.put('/post/update/:id', async (req, res) => {
    try {
      const post = await Posts.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body
        }
      ).exec();
      if (!post) {
        return res.status(400).json({
          error: "Post not found"
        });
      }
      return res.status(200).json({
        success: "Updated successfully"
      });
    } catch (err) {
      return res.status(400).json({
        error: err
      });
    }
  });
  


  //Delete posts
  router.delete('/post/delete/:id', async (req, res) => {
    try {
      const deletedPost = await Posts.findByIdAndRemove(req.params.id).exec();
      if (!deletedPost) {
        return res.status(404).json({
          message: "Post not found"
        });
      }
      return res.json({
        message: "Delete Successful",
        deletedPost
      });
    } catch (err) {
      return res.status(400).json({
        message: "Delete unsuccessful",
        error: err
      });
    }
  });
  


module.exports = router;