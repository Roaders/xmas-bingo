import { ColIndex, RowIndex } from './contracts';


export const tiles: {[key: string]: string} = Array.from({length: 32})
    .map((_, index) => `value_${index}`)
    .reduce((lookup, item) => ({...lookup, item}), {});

export const rows: RowIndex[] = [0, 1, 2, 3];
export const cols: ColIndex[] = [0, 1, 2, 3];
