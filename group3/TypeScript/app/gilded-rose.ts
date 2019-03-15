export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.items[i].quality > 0) {
                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                        this.items[i].quality = this.items[i].quality - 1
                    }
                }
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        if (this.items[i].sellIn < 6) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                }
            }
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie') {
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                this.items[i].quality = this.items[i].quality - 1
                            }
                        }
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }
        }

        return this.items;
    }


    updateQualityDev() {
        this.items.map((item: Item, index: number) => handleNextDay(item, index));
        return this.items;
    }

}

//The Quality of an item is never more than 50
//The Quality of an item is never negative

export const brieStrategy = (item: Item): Item => {
    let sellIn;
    let quality;
    const qualityDecrDays = item.sellIn <= 0 ? 2 :1;
    quality = item.quality <= 50 - qualityDecrDays ? item.quality + qualityDecrDays : 50;
    sellIn = item.sellIn - 1;
    return new Item(item.name, sellIn, quality);
};

// Once the sell by date has passed, Quality degrades twice as fast
export const defaultStrategy = (item: Item): Item => {
    let sellIn;
    let quality;
    if (item.sellIn <= 0) {
        quality = item.quality >= 2 ? item.quality - 2 : 0;
    } else {
        quality = item.quality >= 1 ? item.quality - 1 : 0;
    }
    sellIn = item.sellIn - 1;
    return new Item(item.name, sellIn, quality);
};


export const sulfurasStrategy = (item: Item): Item => {
    return new Item(item.name, item.sellIn, item.quality);
}

// “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; 
// Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but 
// Quality drops to 0 after the concert


export const BackstagePassesStrategy = (item: Item): Item => {
    let sellIn;
    let quality;
    const qualityDecrDays = item.sellIn <= 0 ? 5 :1;
    quality = item.quality <= 50 - qualityDecrDays ? item.quality + qualityDecrDays : 50;
    sellIn = item.sellIn - 1;
    return new Item(item.name, sellIn, quality);
}


// Aged Brie” actually increases in Quality the older it gets
export const factoryStrategy = {
    'Aged Brie': brieStrategy,
    'Sulfuras': sulfurasStrategy,
    'Backstage passes': BackstagePassesStrategy
};

export const handleNextDay = (item: Item, day: number): Item => {
    return factoryStrategy[item.name] ? factoryStrategy[item.name](item) : defaultStrategy(item);
};
