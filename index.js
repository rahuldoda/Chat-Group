 const express = require('express');
 const cors = require('cors')
 const app = express();

const {connectMongoDB}=require('./connection');
const userRouter = require('./routes/user.routes')
const groupRouter = require('./routes/group.routes')
const messageRouter = require('./routes/message.routes')
port = 8080;
const corsOptions = {
  credentials: true,
  origin: ['http://localhost:4200'] // Whitelist the domains you want to allow
};
connectMongoDB();
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users',userRouter)
app.use('/groups',groupRouter)
app.use('/message',messageRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })