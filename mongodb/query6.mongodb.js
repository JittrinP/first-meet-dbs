//ตั้งชื่อไฟล์ให้ javascript สามารถใช้ extension กับ mongodb ได้ ต้องตั้งชื่อให้มี .mongodb.js
//สร้าง function ที่ข้างในเป็นข้อมูล database ชื่อ sample_mflix
use("sample_mflix")
//ex.5  topic1
db.movies.find({year : {$gte : 1950 , $lte : 1970} , countries: {$in : ["USA"]}});

//ex.5  topic2
db.movies.find({genres: {$all : ["Drama","History"]}, year : {$gte : 1970} }).count();

//ex.5  topic3
db.movies.find({cast : "Roy L. McCardell"}).count();

//ex.5  topic4
db.movies.find({directors : "Hal Roach"}).count();

//ex.5  topic5
db.movies.find({directors : "Hal Roach"}).sort({released : -1}).limit(1);

//ex.5  topic6
db.movies.find({directors : "Hal Roach" , "awards.wins" :{$gt : 0}}).count();