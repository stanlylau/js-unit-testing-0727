const { Shop, Item } = require("./gilded_rose.js")

const assertGildedRose = (items, itemName,sellin,quality) =>{
     expect(items[0].name).toBe(itemName)
    expect(items[0].sellIn).toEqual(sellin)
    expect(items[0].quality).toEqual(quality)
}

describe("Gilded Rose", () => {

  it("should foo", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)])
    const items = gildedRose.updateQuality()
    assertGildedRose(items,'Aged Brie',1,1)
    
  });

    it("Once the sell by date has passed, Quality degrades twice as fast", () => {
    const gildedRose = new Shop([new Item("Other Items", 0, 5)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Other Items")
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(3)
  });

    it("quality of an item is never negative", () => {
    const gildedRose = new Shop([new Item("Other Items", 3, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Other Items")
    expect(items[0].sellIn).toEqual(2)
    expect(items[0].quality).toEqual(0)
  });

   it("quality of an item never more than 50", () => {
    const gildedRose = new Shop([new Item("Other Items", 3, 51)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Other Items")
    expect(items[0].sellIn).toEqual(2)
    expect(items[0].quality).toEqual(50)
  });

  it("Aged Brie actually increases in Quality the older it gets", () => {
    const gildedRose = new Shop([new Item("Aged Brie",0, 10)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Aged Brie")
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(12)
  });

  it("Aged Brie actually increases in Quality the older it gets", () => {
    const gildedRose = new Shop([new Item("Item 4",0, 10)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Item 4")
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(8)
  });
});