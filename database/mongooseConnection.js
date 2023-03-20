const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});


const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, enum: ['POLITICAL', 'SPORTS', 'BUSINESS', 'ENTERTAINMENT', 'OTHER'], required: true },
  description: { type: String, required: true },
  poster: { type: String, required: true },
  tags: [{ type: String }]
});

const News = mongoose.model('News', newsSchema);


module.exports = News;

