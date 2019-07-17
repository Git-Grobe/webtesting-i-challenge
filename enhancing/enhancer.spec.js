const enhancer = require("./enhancer.js");

// test away!

//arrange
//act
//assert

describe("enhancer.js", () => {

  describe("repair()", () => {

    it("restores the durability to 100", () => {
      const item = { 
          name: "item 1",
          durability: 1,
          enhancement: 1 
      };

      expect(enhancer.repair(item).durability).toBe(100);
    });

  });

  describe('succeed()', () => {

    it('item enhancement +1', () => {
        const itemEnhancementPlusOne = {
            name: "item 2",
            durability: 2,
            enhancement: 2,
        };

        expect(enhancer.succeed(itemEnhancementPlusOne).enhancement).toBe(itemEnhancementPlusOne.enhancement + 1);
    })

    it('if enhancement equals 20 it is not changed', () => {
        const itemEnhancementEqualsTwenty = {
            name: "item 20",
            durability: 20,
            enhancement: 20,
        };

        expect(enhancer.succeed(itemEnhancementEqualsTwenty).enhancement).not.toBe(itemEnhancementEqualsTwenty.enhancement + 1);
    })

    it('durability is not changed', () => {
        const itemDurabilityIsNotChanged = {
            name: "item 3",
            durability: 3,
            enhancement: 3,
        };

        expect(enhancer.succeed(itemDurabilityIsNotChanged).durability).toBe(itemDurabilityIsNotChanged.durability);
    })

  })

  describe('fail()', () =>{

    it("if enhacement is less than 15, durability is decreased by 5", () => {
        const item = { 
            name: "item 5",
            durability: 5,
            enhancement: 5 
        };
        expect(enhancer.fail(item).durability).toBe(item.durability - 5);
      });

      it("if enhacement is greater than 15, durability is decreased by 10", () => {
        const item = { 
            name: "item 5",
            durability: 5,
            enhancement: 16 
        };
        expect(enhancer.fail(item).durability).toBe(item.durability - 10);
      });

      it("if enhacement is greater than 15, durability is decreased by 10", () => {
        const item = { 
            name: "item 5",
            durability: 5,
            enhancement: 16 
        };
        expect(enhancer.fail(item).enhancement).toBe(item.enhancement - 1);
      });

  })
});
