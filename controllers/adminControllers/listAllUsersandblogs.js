const pool = require('../../database/mysqlConnection');
const News = require('../../database/mongooseConnection')

const listAllUsers=(req, res) => {
    pool.query('SELECT username,email,profilepic FROM userAuth', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
}

const listAllBlog = async (req, res) => {
    try {
      const news = await News.find();
      res.json(news);
      

    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to get news articles' });
    }
  }

module.exports = {listAllUsers,listAllBlog}
  