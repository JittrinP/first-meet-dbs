//ตั้งชื่อไฟล์ให้ javascript สามารถใช้ extension กับ mongodb ได้ ต้องตั้งชื่อให้มี .mongodb.js
//สร้าง function ที่ข้างในเป็นข้อมูล database ชื่อ sample_mflix
use("sample_mflix")
//ex.3  topic1
db.theaters.find({"location.address.state": "MN"}).count();

//ex.3  topic2
db.theaters.find({"location.address.city": "California"}).count();

//ex.3  topic2
db.theaters.find({"location.address.city": "California"});