class ToiletDoor {
  // สร้างตัวแปร instance เพื่อเก็บประตูที่มีแค่หนึ่งอัน
  static instance = new ToiletDoor();

  // กำหนด constructor เป็น private (ใน JS ใช้วิธีป้องกันการสร้างใหม่)
  constructor() {
    if (ToiletDoor.instance) {
      throw new Error("Cannot instantiate more than one ToiletDoor.");
    }
    ToiletDoor.instance = this;
  }

  // ฟังก์ชันสำหรับเปิดประตู
  openTheDoor() {
    console.log("Door is opened.");
    return "Door is opened.";  // ส่งค่ากลับ
  }

  // ฟังก์ชันสำหรับปิดประตู
  closeTheDoor() {
    console.log("Door is closed.");
    return "Door is closed.";  // ส่งค่ากลับ
  }

  // ฟังก์ชันสำหรับเรียก instance
  static getInstance() {
    return ToiletDoor.instance;
  }
}

// ส่งออก ToiletDoor โดยใช้ module.exports
module.exports = { ToiletDoor, getInstance: ToiletDoor.getInstance };
