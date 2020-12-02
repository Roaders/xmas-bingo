import { Component } from '@angular/core';
import { cols, getTiles, rows } from 'src/app/constants';
import { Grid, ICell, Row, RowIndex } from 'src/app/contracts';
import { removeRandomItem } from 'src/app/helpers';

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

    public getSource(cell: ICell): string{
        return `assets/squares/${cell.value}.png`;
    }

    private generateGrid(): Grid {
        const items = getTiles();
        const itemKeys = Object.keys(items);

        return rows.map(rowIndex => cols
            .map<ICell>(col => {
                const item = removeRandomItem(itemKeys);
                return { row: rowIndex, col, value: item, display: items[item]};
            })
            .reduce((row, cell) => ({...row, [cell.col]: cell}), {} as Row)
        ).reduce((grid, row) => ({...grid, [row[0].row]: row}), {} as Grid);
    }

}
