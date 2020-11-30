import { rows } from './constants';

export type RowIndex = 0 | 1 | 2 | 3;
export type ColIndex = 0 | 1 | 2 | 3;

export interface ICell{
    row: RowIndex;
    col: ColIndex;
    value: string;
    display: string;
}

export type Row = Record<ColIndex, ICell>;
export type Grid = Record<RowIndex, Row>;
