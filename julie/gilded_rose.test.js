const { Shop, Item } = require("./gilded_rose.js")

describe("Gilded Rose", () => {

    describe('Aged Brie', () => {
        let agedBrie

        beforeEach(() => {
            agedBrie = new Item("Aged Brie", 2, 2)
        })

        it("Updated quality and sellin of  'Aged Brie'", () => {
          agedBrie.sellIn = 2
          agedBrie.quality = 2
          const item = nextDay(agedBrie)
          expect(item.name).toBe(agedBrie.name)
          expect(item.sellIn).toEqual(agedBrie.sellIn - 1)
          expect(item.quality).toEqual(agedBrie.quality + 1)
        });
      
        const EXPIRED = 0
        it("expired aged brie doubles the quality", () => {
            agedBrie.sellIn = EXPIRED
          agedBrie.quality = 2
          const item = nextDay(agedBrie)
          expect(item.name).toBe(agedBrie.name)
          expect(item.sellIn).toEqual(agedBrie.sellIn - 1)
          expect(item.quality).toEqual(agedBrie.quality + 2)
        });

    })
    function nextDay(item) {
        return new Shop([item]).updateQuality()[0]
    }

  it("Quality of Item 2 with selin and queality 0", () => {
    const gildedRose = new Shop([new Item("Item 2", 0, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Item 2")
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(0)

  });

  it("Quality of Item 3 with selin and queality 5", () => {
    const gildedRose = new Shop([new Item("Item 3", 5, 5)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Item 3")
    expect(items[0].sellIn).toEqual(4)
    expect(items[0].quality).toEqual(4)

  });

  it("Quality of Item 4 with selin and queality 10", () => {
    const gildedRose = new Shop([new Item("Item 4", 10, 10)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Item 4")
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(9)

  });

  it("Quality of Item 5 with selin and queality -1", () => {
    const gildedRose = new Shop([new Item("Item 5", -1, -1)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Item 5")
    expect(items[0].sellIn).toEqual(-2)
    expect(items[0].quality).toEqual(-1)

  });

  it("Quality of Aged Brie with selin and queality -1", () => {
    const gildedRose = new Shop([new Item("Item 5", -1, -1)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Item 5")
    expect(items[0].sellIn).toEqual(-2)
    expect(items[0].quality).toEqual(-1)

  });

  

//   it("Updated quality and sellin of 'Backstage passes to a TAFKAL80ETC concert'", () => {
//     const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 0)])
//     const items = gildedRose.updateQuality()
//     expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
//     expect(items[0].sellIn).toEqual(1)
//     expect(items[0].quality).toEqual(3)

//   });

//   it("Updated quality and sellin of 'Backstage passes to a TAFKAL80ETC concert'", () => {
//     const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 12)])
//     const items = gildedRose.updateQuality()
//     expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
//     expect(items[0].sellIn).toEqual(1)
//     expect(items[0].quality).toEqual(3)

//   });

//   it("Updated quality and sellin of 'Backstage passes to a TAFKAL80ETC concert'", () => {
//     const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 12, 12)])
//     const items = gildedRose.updateQuality()
//     expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
//     expect(items[0].sellIn).toEqual(1)
//     expect(items[0].quality).toEqual(3)

//   });

});