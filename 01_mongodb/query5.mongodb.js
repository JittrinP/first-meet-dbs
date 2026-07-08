//ตั้งชื่อไฟล์ให้ javascript สามารถใช้ extension กับ mongodb ได้ ต้องตั้งชื่อให้มี .mongodb.js
//สร้าง function ที่ข้างในเป็นข้อมูล database ชื่อ sample_mflix
use("sample_mflix")
//ex.5  topic1
db.movies.find().sort({runtime : -1}).limit(5);

//ex.5  topic2
db.movies.find({runtime: {$lt:60}}).sort({runtime : -1}).limit(5);

//ex.5  topic3 incase he can watch older than year that he born.
db.movies.find({year: {$lte:1965}}).limit(3);

//ex.5  topic3 incase he can watch older than year that he born.
db.movies.find({year: {$gte:1990 , $lte:2000}}).count();