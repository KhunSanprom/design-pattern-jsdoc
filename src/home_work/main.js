const { ToiletDoor, getInstance } = require('./Toilet'); // นำเข้า ToiletDoor และ getInstance

class Main {
  static main() {
    // ใช้ประตูผ่าน getInstance
    const toiletDoor = getInstance();

    // ลองใช้งานประตูได้ปกติ
    toiletDoor.openTheDoor();
    toiletDoor.closeTheDoor();

    // จะไม่สามารถสร้างประตูใหม่แบบนี้ได้ เพราะ constructor เป็น private
    // ถ้าลองสร้างใหม่จะเกิดข้อผิดพลาด
    try {
      const newToiletDoor = new ToiletDoor();
    } catch (error) {
      console.log(error.message); // จะพิมพ์ "Cannot instantiate more than one ToiletDoor."
    }
  }
}

module.exports={Main}
