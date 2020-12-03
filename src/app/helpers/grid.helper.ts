import { Grid, ICell, Row } from '../contracts';

export function compareGrid(one: Grid, two: Grid): boolean{
    const comparisonValues = reduceGrid(two).map(cell => cell.value);
    return reduceGrid(one).map(cell => cell.value).every(value => comparisonValues.includes(value));
}

export function reduceGrid(grid: Grid): ICell[]{
    return grid.reduce((cells, row) => [...cells, ...row], new Array<ICell>());
}
