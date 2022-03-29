const express=require('express');
const server=express();
const PORT=4000;
server.listen(PORT);
const mongodb=require('../Nodejs/Restaurants/db/mongodb');
mongodb.connect();
// importing all files her
    const parser=require('body-parser')
    server.use(parser.json());
    const RestaurantRoutes=require('./Restaurants/Routes/router-api');
   
// importing ended

server.use('/Admin/Restaurant',RestaurantRoutes);

server.get('/',(req,res)=>{
    res.send('server is running on port 4000');
})
console.log('server is listening on port 4000');
