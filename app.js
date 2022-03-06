const express = require("express");
const ejs = require("ejs");
const https = require("https");
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/sampleData",{ useNewUrlParser: true ,useUnifiedTopology: true });

const app = express();

app.set('view engine',"ejs");

app.use(express.static('public'));


//---------- ------------------------------------------------------------------
const DSchema = new mongoose.Schema({
    Name : String,
    Last : String,
     Buy : String,
     Sell : String,
     Volume : String,
     Base_unit : String
  });
 
  const Samples = mongoose.model('Sample', DSchema);
//---------------------------------------------------------------------------------


// let arr = ["btcinr", "xrpinr","ethinr","trxinr","eosinr","zilinr","batinr","zrxinr","reqinr","nulsinr"];
// let data = [];
// let index=0;
// let temp =" ";
// const url = "https://api.wazirx.com/api/v2/tickers#";
// https.get(url, res => {
//       res.setEncoding("utf8")
//       res.on('data', chunk => {
//             data += chunk;
//           });
//           res.on('end', () => {
//                 data = JSON.parse(data);
//                 for ( index = 0; index < arr.length; index++) {
        
//                    temp = arr[index];
//                 //    console.log(data[temp]);
//                    const Sample = new Samples({
//                             Name : data[temp].name,
//                             Last : data[temp].last,
//                              Buy : data[temp].buy,
//                              Sell : data[temp].sell,
//                              Volume : data[temp].volume,
//                              Base_unit : data[temp].base_unit 
//                          }); 
//                          const Sampled=  Sample.save();
//                          console.log("Data is Sucessfully Saved....!");   
//                    }
//                    // console.log(obj);
//                 }).on('error', err => {
//                     console.log(err.message);
//                 })
//  }  );

//  //-----------------------------------------------------------------------------
 
 


app.get("/",function (req,res) {
    Samples.find({},function (err,Samples) {
        // console.log(Samples);
        if (err) {
            console.log("Enable to fetch data");
        } else {
              res.render('index',{
                Samples : Samples
            })}
    });
});

app.listen(2020,function () {
    console.log("Server start on port 2020");
});
