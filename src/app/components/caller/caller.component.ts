import { Component } from '@angular/core';
import { gameTiles } from 'src/app/constants';
import { removeRandomItem } from 'src/app/helpers';
import { getSource } from 'src/app/helpers/image.helper';

@Component({
    selector: 'app-caller',
    templateUrl: './caller.component.html',
    styleUrls: ['./caller.component.scss']
})
export class CallerComponent {

    constructor(){
        this.newGame();
    }

    public get previousCards(): string[]{
        return this._previousCards;
    }

    public get currentCard(): string | undefined{
        return this._currentCard;
    }

    public get gameOver(): boolean{
        return this._remainingCards.length === 0;
    }

    private _remainingCards: string[] = [];
    private _previousCards: string[] = [];

    private _currentCard: string | undefined;

    public getCardSource(value: string): string{
        return getSource(value);
    }

    public getCardDisplay(value: string): string{
        return gameTiles[value];
    }

    public newGame(): void{
        this._previousCards = [];
        this._remainingCards = Object.keys(gameTiles);
        this._currentCard = undefined;
    }

    public draw(): void{
        const item = removeRandomItem(this._remainingCards);
        this._currentCard = item;
        this._previousCards.unshift(item);
    }
}
