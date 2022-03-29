const Restaurant=require('../Models/model-api');
const repoApi=require('../Repositories/repo-api');
// const {param}=require('../Routes/router-api')
exports.addRestaurant=(req,res)=>{
    console.log(req.body);
    res.send('retrived successfully');
    
     const newRestaurant=new Restaurant(null,req.body.name,req.body.location,req.body.website);

    repoApi.addRestaurant(newRestaurant,()=>{
        return console.log('data is added successfully in database');
    });
}
// Get all Restaurants From Restaurant database
exports.getAllRestaurants=(req,res)=>{
    repoApi.getAll((Restaurant)=>{
        res.send(Restaurant);
    })
}
// Here we Get the Restaurants According to Their Names
exports.getRestaurantsByName=(req,res)=>{
    const nameP=req.params.name;
    console.log(nameP);
    repoApi.onRestaurantName(nameP,(Restaurant)=>{
        res.send(Restaurant);
        
    })
}
// Update Restaurants on names
exports.updateRestaurants=(req,res)=>{
    console.log(req.body);
    const updatedRestaurant=new Restaurant(
        req.body.id,
        req.body.name,
        req.body.location,
        req.body.website
        );
        console.log(updatedRestaurant);
    repoApi.onRestaurantUpdate(updatedRestaurant,()=>{
        repoApi.onRestaurantName(updatedRestaurant.name,(Restaurant)=>{
            res.send(Restaurant);
        })
    })
}
// delete Restaurants ON Name
exports.deleteRestaurantByName=(req,res)=>{
    const nameP=req.params.name;
    console.log(nameP);
    repoApi.onDeleteRestaurant(nameP,()=>{
        res.send(`Restaurant at ${nameP} is deleted successfully!!`);
    })
}
// search Restaurant From database
exports.searchRestaurant=(req,res)=>{
    const keyP=req.params.key;
    console.log(keyP);
    repoApi.searchRestaurantBykey(keyP,(Restaurant)=>{
        res.send(Restaurant);
    })
}