const mongodb=require('mongodb');
const url="mongodb+srv://ubairwani:com.sourceCode@restaurant1.hrsoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongodbClient=mongodb.MongoClient;
var connectedClient;
exports.connect=()=>{
    mongodbClient.connect(url).then((client)=>{
        connectedClient=client;
        console.log('DB is connected successfully ');
    })
    .catch((err)=>{
        console.log("an error occured check the details below  " + err);
    })
 }
exports.getCollections=(nameOfCollection)=>{
    return connectedClient.db('myFirstDatabase').collection(nameOfCollection);
};