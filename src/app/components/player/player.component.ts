import { Component } from '@angular/core';
import { cols, gameTiles, rows } from 'src/app/constants';
import { Grid, ICell, Row } from 'src/app/contracts';
import { removeRandomItem } from 'src/app/helpers';
import { compareGrid, reduceGrid } from 'src/app/helpers/grid.helper';
import { getSource } from 'src/app/helpers/image.helper';
import { faSplotch, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

    public readonly faSplotch = faSplotch;
    public readonly faCheck = faCheck;

    private _grids: Grid[] = [this.generateGrid()];

    public get previousGrids(): Grid[]{
        return this._grids.slice(1);
    }

    public get grid(): Grid{
        return this._grids[0];
    }

    public getBingo(grid: Grid): boolean{
        return reduceGrid(grid).every(cell => cell.dobbed);
    }

    public newGrid(): void{

        let newGrid: Grid = this.generateGrid();

        while (this._grids.some(grid => compareGrid(grid, newGrid))) {
            newGrid = this.generateGrid();
        }

        this._grids.unshift(newGrid);
    }

    public dobCell(cell: ICell): void{
        cell.dobbed = true;
    }

    public getRows(grid: Grid): Row[] {
        return Object.values(grid);
    }

    public getCells(row: Row): ICell[] {
        return Object.values(row);
    }

    public getCellSource(cell: ICell): string{
        return getSource(cell.value);
    }

    private generateGrid(): Grid {
        const itemKeys = Object.keys(gameTiles);

        return rows.map(rowIndex => cols
            .map<ICell>(col => {
                const item = removeRandomItem(itemKeys);
                return { row: rowIndex, col, value: item, display: gameTiles[item], dobbed: false};
            })
            .reduce((row, cell) => [...row, cell], new Array<ICell>())
        ).reduce((grid, row) => [...grid, row], new Array<ICell[]>()) as Grid;
    }
}
