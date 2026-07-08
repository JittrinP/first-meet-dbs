//ตั้งชื่อไฟล์ให้ javascript สามารถใช้ extension กับ mongodb ได้ ต้องตั้งชื่อให้มี .mongodb.js
//สร้าง function ที่ข้างในเป็นข้อมูล database ชื่อ sample_mflix
use("sample_mflix")
//ex.4  topic1
db.movies.find({plot : {$regex : "American"}}).count();

//ex.4  topic2
db.movies.find({plot : {$regex : "street.$"}}).count();

//ex.4  topic3
db.movies.findOne({plot : {$regex : "street.$" }});