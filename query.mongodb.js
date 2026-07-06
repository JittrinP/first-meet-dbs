//ตั้งชื่อไฟล์ให้ javascript สามารถใช้ extension กับ mongodb ได้ ต้องตั้งชื่อให้มี .mongodb.js
//สร้าง function ที่ข้างในเป็นข้อมูล database ชื่อ sample_mflix
use("sample_mflix")
//อันนี้เป็น function ที่ไปค้นหา collection ทั้งหมดที่มีชื่อว่า comments ex.1  topic1

db.comments.find();

// การหา id นี้โดยเอามาตัวเดียว ex.1 topic2
db.comments.findOne({_id:ObjectId("5a9427648b0beebeb69579f5")});

// การหา email นี้โดยเอามาตัวเดียว ex.1 topic3
db.comments.findOne({email : "john_bishop@fakegmail.com"});

// การหา email นี้โดยเอามาตัวเดียว ex.1 topic4
db.comments.findOne({name: "John Bishop"});

//db.movies.find({ type: "movie" , rated :"TV-G"}).count();