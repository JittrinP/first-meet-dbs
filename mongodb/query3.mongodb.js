//ตั้งชื่อไฟล์ให้ javascript สามารถใช้ extension กับ mongodb ได้ ต้องตั้งชื่อให้มี .mongodb.js
//สร้าง function ที่ข้างในเป็นข้อมูล database ชื่อ sample_mflix
use("sample_mflix")
//ex.3  topic1
db.theaters.find({"location.address.state": "AL"}).count();

//ex.3  topic2
db.theaters.find({"location.address.city": "La Quinta"}).count();

//ex.3  topic3
db.theaters.find({"location.address.city": "La Quinta"});
