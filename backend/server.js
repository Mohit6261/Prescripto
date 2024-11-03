import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoutes.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app=express();

const port=9090;



connectDB()
connectCloudinary()

app.use(express.json());
app.use(cors());

//api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)
//localhost:9090/api/add-doctor

app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Catch-all route to serve index.html for any unmatched route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// app.get('/',(req,res)=>{
//      res.send('API WOKING ')
// })

app.listen(port,()=>{
    console.log('app is litening to port 9090')
})


