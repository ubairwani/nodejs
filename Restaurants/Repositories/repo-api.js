const mongodb=require('../db/mongodb');
const Restaurant=require('../Models/model-api');

exports.addRestaurant=(item,callback)=>{
    const collections=mongodb.getCollections('myFirstDatabase');
    collections.insertOne({name:item.name,location:item.location,website:item.website})
    .then(()=>{
        callback();
    })
    .catch(err=>{
        console.log(err);
    })
}
// Get All Restaurants From our Restaurant Database 
exports.getAll=(callback)=>{
    const collections=mongodb.getCollections('myFirstDatabase');
    collections.find().toArray().then(
        (Restaurant)=>{
            callback(Restaurant);
        }
    )
    .catch(err=>{
        console.log(err);
    })
}
// get And find Restaurants 0n Names
exports.onRestaurantName=(name,callback)=>{
    const collections=mongodb.getCollections('myFirstDatabase');
    collections.find({RestaurantName:name}).toArray().then((Restaurant)=>{
        callback(Restaurant);
       
    })
    .catch(err=>{
        console.log(err);
    })
}
// update restaurant on base name
exports.onRestaurantUpdate=(Restaurant,callback)=>{
    const collections=mongodb.getCollections('myFirstDatabase');
    const filter={RestaurantName:Restaurant.name};
    console.log(filter);
    const updateQuery={$set:{RestaurantName:Restaurant.name,RestaurantLocation:Restaurant.location,RestaurantWebsite:Restaurant.website}};
    console.log(updateQuery);
    collections.findOneAndUpdate(filter,updateQuery).then(
        ()=>{
            callback();
        },
        err=>{
            console.log(err)
        }
    )
}
// deleting restaurans on names
exports.onDeleteRestaurant=(name,callback)=>{
    const collections=mongodb.getCollections('myFirstDatabase');
    collections.findOneAndDelete({RestaurantName:name}).then(
        ()=>{
            callback();
        }
    )
    err=>{
        console.log(err);
    }
}
// searching the restaurant by key
exports.searchRestaurantBykey=(key,callback)=>{
    const collections=mongodb.getCollections('myFirstDatabase');
    collections.find({RestaurantName:{$regex:key}}).toArray().then(
        (Restaurant)=>{
            callback(Restaurant);
        }
    )
    err=>{
        console.log(err);
    }
}