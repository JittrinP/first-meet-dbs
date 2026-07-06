//ตั้งชื่อไฟล์ให้ javascript สามารถใช้ extension กับ mongodb ได้ ต้องตั้งชื่อให้มี .mongodb.js
//สร้าง function ที่ข้างในเป็นข้อมูล database ชื่อ sample_mflix
use("sample_mflix")
//อันนี้เป็น function ที่ไปค้นหา collection ทั้งหมดที่มีชื่อว่า comments
// db.comments.find();

db.comments.find({_id:ObjectId("5a9427648b0beebeb69579f5")});