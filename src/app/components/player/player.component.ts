import { Component } from '@angular/core';
import { cols, rows } from 'src/app/constants';
import { Grid, ICell, Row, RowIndex } from 'src/app/contracts';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

    private _grid: Grid;

    constructor(){
        this._grid = this.generateGrid();
    }

    public get rows(): Row[] {
        return Object.values(this._grid);
    }

    public getCells(row: Row): ICell[] {
        return Object.values(row);
    }

    private generateGrid(): Grid {
        return rows.map(rowIndex => cols
            .map<ICell>(col => ({row: rowIndex, col}))
            .reduce((row, cell) => ({...row, [cell.col]: cell}), {} as Row)
        ).reduce((grid, row) => ({...grid, [row[0].row]: row}), {} as Grid);
    }

}
