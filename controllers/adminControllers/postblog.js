const News = require('../../database/mongooseConnection')

const newsBlog = async (req, res) => {
  const { title, description, category,tags } = req.body;
  const poster = req.file ? req.file.path : null;
  

  if (!title && !description && !category && !poster) {
    return res.status(400).json({ error: '400', message: 'title, description, category, poster fields are required'})
  } else if (!title) {
    res.status(400).json({ error: '400', message: "Title is required" });
  } else if (!category) {
    res.status(400).json({ error: '400', message: "category is required" });
  } else if (!description) {
    res.status(400).json({ error: '400', message: "descriton is required" });
  }else if (!poster) {
    res.status(400).json({ error: '400', message: "poster is required" });
  }

  try {
    if (req.user === 'admin') {
      const exits = await News.findOne({ title })
      if (exits) {
        return res.status(400).json({ error: '400', message: 'This post title is already present' })
      }

      const news = new News({ title, category, description, poster, tags });
      await news.save()
      res.json({ message: 'Succesfully created' })
    } else {
      return res.status(400).json({ error: '402', message: 'your unauthorized to post' })
    }
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: '500', message: 'Failed to create news article' });
  }
}

module.exports = newsBlog;
