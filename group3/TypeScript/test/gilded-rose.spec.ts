import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

const items = [
    new Item("+5 Dexterity Vest", 10, 20), //
    new Item("Aged Brie", 2, 0), //
    new Item("Elixir of the Mongoose", 5, 7), //
    new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
    new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    // this conjured item does not work properly yet
    new Item("Conjured Mana Cake", 3, 6)];


const days: number = 2;

describe('Gilded Rose', function () {

    const newItems = items.map( (item) => new Item( item.name, item.sellIn, item.quality))

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it(`Asserting state after ${days} days`, function () {

        const oldResult = {};
        
        const gildedRose = new GildedRose(items);

        for (let i = 0; i < days; i++) {
            oldResult[i] = gildedRose.updateQuality();
        }

        const newResult = {};
        const newGildedRose = new GildedRose(newItems);

        for (let i = 0; i < days; i++) {
            newResult[i] = newGildedRose.updateQualityDev();
        }

        for (let day = 0; day < days; day++) {
            oldResult[day].forEach((item: Item, index: number) => {

                console.log(item.sellIn)
                console.log(newResult[day][index].sellIn)
                expect(item.name).to.equal(newResult[day][index].name);
                expect(item.sellIn).to.equal(newResult[day][index].sellIn);
                expect(item.quality).to.equal(newResult[day][index].quality);
            })
        }
    })

});
