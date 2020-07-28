const { Shop, Item } = require("./gilded_rose.js")

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Aged Brie")
    expect(items[0].sellIn).toEqual(1)
    expect(items[0].quality).toEqual(1)
  });

  const _createShopWithItems = (items) => {
    return new Shop(items)
  }

  const _assertItemMatches = (item, expectValues) => {
    expect(item.name).toBe(expectValues.name)
    expect(item.sellIn).toEqual(expectValues.sellIn)
    expect(item.quality).toEqual(expectValues.quality)
  }

  describe('#normal item', () => {
    const itemName = 'normal item'

    it('decrease sellIn and quality by 1', () => {
      const gildedRose = _createShopWithItems([new Item(itemName, 1, 5)])

      const items = gildedRose.updateQuality()

      _assertItemMatches(items[0], { name: itemName, sellIn: 0, quality: 4 })
    })

    it('decrease quality by 2 when sellIn is <= 0', () => {
      let gildedRose = _createShopWithItems([new Item(itemName, 0, 5)])

      let items = gildedRose.updateQuality()

      _assertItemMatches(items[0], { name: itemName, sellIn: -1, quality: 3 })

      gildedRose = new Shop([new Item(itemName, -1, 5)])

      items = gildedRose.updateQuality()

      expect(items[0].name).toBe(itemName)
      expect(items[0].sellIn).toEqual(-2)
      expect(items[0].quality).toEqual(3)
    })

    it('item quality cannot be reduced to negative', () => {
      let gildedRose = new Shop([new Item(itemName, 5, 0)])

      let items = gildedRose.updateQuality()

      expect(items[0].name).toBe(itemName)
      expect(items[0].sellIn).toEqual(4)
      expect(items[0].quality).toEqual(0)

      gildedRose = new Shop([new Item(itemName, 5, -1)])

      items = gildedRose.updateQuality()

      expect(items[0].name).toBe(itemName)
      expect(items[0].sellIn).toEqual(4)
      expect(items[0].quality).toEqual(-1)
    })
  })

  describe('#Aged Brie', () => {
    const itemName = 'Aged Brie'

    it('decrease sellIn by 1 and increase quality by 1 when sellIn > 0', () => {
      const gildedRose = new Shop([new Item(itemName, 1, 5)])

      const items = gildedRose.updateQuality()

      expect(items[0].name).toBe(itemName)
      expect(items[0].sellIn).toEqual(0)
      expect(items[0].quality).toEqual(6)
    })

    it('decrease sellIn By 1 and increase quality by 2 when sellIn is <= 0', () => {
      let gildedRose = new Shop([new Item(itemName, 0, 5)])

      let items = gildedRose.updateQuality()

      expect(items[0].name).toBe(itemName)
      expect(items[0].sellIn).toEqual(-1)
      expect(items[0].quality).toEqual(7)

      gildedRose = new Shop([new Item(itemName, -1, 5)])

      items = gildedRose.updateQuality()

      expect(items[0].name).toBe(itemName)
      expect(items[0].sellIn).toEqual(-2)
      expect(items[0].quality).toEqual(7)
    })

    it('item quality cannot be higher than 50', () => {
      let gildedRose = new Shop([new Item(itemName, 1, 50)])

      let items = gildedRose.updateQuality()

      expect(items[0].name).toBe(itemName)
      expect(items[0].sellIn).toEqual(0)
      expect(items[0].quality).toEqual(50)

      gildedRose = new Shop([new Item(itemName, 0, 49)])

      items = gildedRose.updateQuality()

      expect(items[0].name).toBe(itemName)
      expect(items[0].sellIn).toEqual(-1)
      expect(items[0].quality).toEqual(50)
    })
  })

  describe('#Sulfuras, Hand of Ragnaros', () => {
    const itemName = 'Sulfuras, Hand of Ragnaros'

    it('sellIn and quality should not change', () => {
      const gildedRose = new Shop([new Item(itemName, 1, 25)])

      const items = gildedRose.updateQuality()

      expect(items[0].name).toBe(itemName)
      expect(items[0].sellIn).toEqual(1)
      expect(items[0].quality).toEqual(25)
    })
  })

  describe('#Backstage passes to a TAFKAL80ETC concert', () => {
    const itemName = 'Backstage passes to a TAFKAL80ETC concert'

    it('decrease sellIn by 1 and increase quality by 1 when sellIn is > 10', () => {
      const gildedRose = new Shop([new Item(itemName, 11, 25)])

      const items = gildedRose.updateQuality()

      expect(items[0].name).toBe(itemName)
      expect(items[0].sellIn).toEqual(10)
      expect(items[0].quality).toEqual(26)
    })

    it('decrease sellIn by 1 and increase quality by 2 when sellIn is <= 10 & > 5', () => {
      let gildedRose = new Shop([new Item(itemName, 10, 25)])

      let items = gildedRose.updateQuality()

      expect(items[0].name).toBe(itemName)
      expect(items[0].sellIn).toEqual(9)
      expect(items[0].quality).toEqual(27)

      gildedRose = new Shop([new Item(itemName, 6, 25)])

      items = gildedRose.updateQuality()

      expect(items[0].name).toBe(itemName)
      expect(items[0].sellIn).toEqual(5)
      expect(items[0].quality).toEqual(27)
    })



    function nextDay(item) {
        return new Shop([item]).updateQuality()[0]
    }

    let backStage

    beforeEach(() => {
        backStage = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 25)
    })

    it('increase quality by 3 when sellIn is <= 5', () => {
        backStage.sellIn = 3
        backStage.quality = 25
      let item = nextDay(backStage)

      expect(item.name).toBe(backStage.name)
      expect(item.sellIn).toEqual(backStage.sellIn - 1)
      expect(item.quality).toEqual(backStage.quality + 3)
    })

    const EXPIRED = 0
    it('quality drops to 0 when concert is over', () => {
        backStage.sellIn = EXPIRED
        backStage.quality = 25
      
        let item = nextDay(backStage)

      expect(item.name).toBe(backStage.name)
      expect(item.sellIn).toEqual(backStage.sellIn - 1)
      expect(item.quality).toEqual(0)
    })
  })
});