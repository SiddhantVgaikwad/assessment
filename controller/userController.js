const User = require('../models/userSchema');
const Post = require('../models/postSchema');
const dotenv = require('dotenv').config();
const axios = require('axios');


module.exports.fetchUserData = async (req, res) => {
    try {
      const response = await axios.get('https://dummyapi.io/data/v1/user', {
        headers: { 'app-id': process.env.API_KEY},
      });
      
      const users = response.data.data;
  
      // Store users in the database
      await User.insertMany(users);
      res.json({ message: 'Users data fetched and stored successfully.' });
    } catch (error) {
        console.error('Error fetching and storing user data:', error);
      res.status(500).json({ error: 'Error fetching and storing user data.' });
    }
  }


  module.exports.fetchUserPost = async (req, res) => {
    try {
      // Get a list of users from the database
      const users = await User.find();
  
      // Fetch and store posts for each user
      for (const  user of users) {
        const response = await axios.get(`https://dummyapi.io/data/v1/user/${user.id}/post`, {
          headers: { 'app-id': process.env.API_KEY },
        });
  
        const posts = response.data.data;
        
        // Store posts in the database
        await Post.insertMany(posts.map(post => ({ userId: user.id, ...post })));
      }
  
      res.json({ message: 'User posts data fetched and stored successfully.' });
    } catch (error) {
      console.error('Error fetching and storing user data:', error);
      res.status(500).json({ error: 'Error fetching and storing user posts data.' });
    }
  }