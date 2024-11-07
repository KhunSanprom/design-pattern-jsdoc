import { Main } from 'C:/Users/sanpr/DP_Banana/design-pattern-jsdoc/src/home_work/main.js'; // นำเข้า Main class
import { ToiletDoor } from 'C:/Users/sanpr/DP_Banana/design-pattern-jsdoc/src/home_work/Toilet.js'; // นำเข้า ToiletDoor class

describe('Main Tests', () => {
  let toiletDoor;
  
  beforeEach(() => {
    toiletDoor = ToiletDoor.getInstance();
  });

  test('should run the main function correctly', () => {
    // ฟังก์ชัน main() ควรจะทำงานได้ดีและไม่มีข้อผิดพลาด
    expect(() => Main.main()).not.toThrow();
  });

  test('should open the door correctly', () => {
    expect(toiletDoor.openTheDoor()).toBe('Door is opened.');
  });

  test('should close the door correctly', () => {
    expect(toiletDoor.closeTheDoor()).toBe('Door is closed.');
  });

  test('should throw error when trying to instantiate a new ToiletDoor', () => {
    expect(() => new ToiletDoor()).toThrow('Cannot instantiate more than one ToiletDoor.');
  });

  test('should return the same instance of ToiletDoor', () => {
    const anotherToiletDoor = ToiletDoor.getInstance();
    expect(toiletDoor).toBe(anotherToiletDoor); // ควรจะเท่ากันเพราะมีแค่ instance เดียว
  });
});
