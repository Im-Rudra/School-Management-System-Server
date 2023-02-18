require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/connection.db');
const PORT = process.env.PORT || 4000;
const mongoUrl = process.env.MONGO_URL;

app.listen(PORT, async () => {
  await connectDB(mongoUrl);
  console.log('app is running on port: http://localhost:' + PORT);
});
