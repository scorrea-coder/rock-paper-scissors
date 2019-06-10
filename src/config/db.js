import mongoose from 'mongoose';
import { config } from 'dotenv';

config({ path: './src/config/.env' });

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
  } catch (error) {
    mongoose.disconnect();
    process.exit(1);
  }
};

module.exports = connectToDb;
