const express=require('express');
const controller=require('../Controller/controller-api');
const router=express.Router();
router.post("/",controller.addRestaurant);
router.get("/GetAllRestaurants",controller.getAllRestaurants);
router.get("/GetRestaurants/:name",controller.getRestaurantsByName);
router.put("/update",controller.updateRestaurants);
router.delete("/delete/:name",controller.deleteRestaurantByName);

module.exports=router;