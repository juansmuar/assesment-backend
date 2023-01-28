import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import conectDb from './config/database.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
// app.use(morgan('dev'));

conectDb();
routes(app);

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})
