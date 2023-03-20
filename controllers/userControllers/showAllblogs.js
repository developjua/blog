const News = require('../../database/mongooseConnection')



const listAllBlogusers = async (req, res) => {
    try {
      const news = await News.find();
      res.json(news);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to get news articles' });
    }
  }

module.exports=listAllBlogusers;