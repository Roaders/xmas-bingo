import { ColIndex, RowIndex } from './contracts';

export function getTiles(): Record<string, string> {
    return {
        adventCalendar: 'Advent Calendar',
        cake: 'Cake',
        candles: 'Candles',
        cards: 'Cards',
        crackers: 'Crackers',
        decorations: 'Decorations',
        elves: 'Elves',
        family: 'Family',
        holly: 'Holly',
        jingleBells: 'Jingle Bells',
        lights: 'Lights',
        mincePies: 'Mince Pies',
        party: 'Party',
        presents: 'Presents',
        reindeer: 'Reindeer',
        rudolph: 'Rudolph',
        santaChimney: 'Santa Chimney',
        santaHat: 'Santa Hat',
        santa: 'Santa',
        sleigh: 'Sleigh',
        snowflake: 'Snowflake',
        snowman: 'Snowman',
        sprouts: 'Sprouts',
        stars: 'Stars',
        stockings: 'Stockings',
        tinsel: 'Tinsel',
        turkey: 'Turkey',
        wreath: 'Wreath',
    };
}

export const rows: RowIndex[] = [0, 1, 2, 3];
export const cols: ColIndex[] = [0, 1, 2, 3];
