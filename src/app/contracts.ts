import { rows } from './constants';

export type RowIndex = 0 | 1 | 2 | 3;
export type ColIndex = 0 | 1 | 2 | 3;

export interface ICell{
    readonly row: RowIndex;
    readonly col: ColIndex;
    readonly value: string;
    readonly display: string;
    dobbed: boolean;
}

export type Row = [ICell, ICell, ICell, ICell];
export type Grid = [Row, Row, Row, Row];
