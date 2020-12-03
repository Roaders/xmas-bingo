import { Component, OnInit } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { gameTiles } from 'src/app/constants';
import { pickRandomItem, removeRandomItem } from 'src/app/helpers';
import { getSource } from 'src/app/helpers/image.helper';

const drawInterval = 100;
const minTimeout = 1000;
const maxTimeout = 3000;

@Component({
    selector: 'app-caller',
    templateUrl: './caller.component.html',
    styleUrls: ['./caller.component.scss']
})
export class CallerComponent implements OnInit {

    private _interval: number | undefined;
    private _timeout: number | undefined;
    private _cardsLoaded = false;
    private _remainingCards: string[] = [];
    private _previousCards: string[] = [];
    private _currentCard: string | undefined;

    public get drawing(): boolean{
        return this._interval != null;
    }

    public get cardsLoaded(): boolean{
        return this._cardsLoaded;
    }

    constructor(){
        this.newGame();
    }

    public get canDraw(): boolean {
        return !this.gameOver && this.cardsLoaded && !this.drawing;
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

    ngOnInit(): void {
        this.loadCards();
    }

    public getCardSource(value: string): string{
        return getSource(value);
    }

    public getCardDisplay(value: string): string{
        return gameTiles[value];
    }

    public newGame(): void{
        this.resetTimers();
        this._previousCards = [];
        this._remainingCards = Object.keys(gameTiles);
        this._currentCard = undefined;
    }

    public draw(): void {
        if (this._remainingCards.length < 2){
            return this.doDraw();
        }

        this._currentCard = pickRandomItem(this._remainingCards.filter(card => card !== this._currentCard));

        this._interval = setInterval(() => {
            this._currentCard = pickRandomItem(this._remainingCards);
        }, drawInterval) as any;

        const duration = Math.floor(Math.random() * (maxTimeout - minTimeout)) + minTimeout;

        this._timeout = setTimeout(() => this.doDraw(), duration) as any;
    }

    private doDraw(): void{
        this.resetTimers();
        const item = removeRandomItem(this._remainingCards);
        this._currentCard = item;
        this._previousCards.unshift(item);
    }

    private resetTimers(): void{
        if (this._timeout != null){
            clearTimeout(this._timeout);
        }
        if (this._interval != null){
            clearInterval(this._interval);
        }
        this._timeout = undefined;
        this._interval = undefined;

    }

    private loadCards(): void{
        from(Object.keys(gameTiles)).pipe(
            mergeMap(loadCard, 5)
        )
        .subscribe({
            next: tile => console.log(tile),
            complete: () => this._cardsLoaded = true,
        });
    }
}

function loadCard(value: string): Observable<string>{
    const src = getSource(value);
    const image = new Image();
    const subject = new Subject<string>();

    image.onload = () => {
        subject.next(src);
        subject.complete();
    };

    image.onerror = error => {
        subject.error(error);
    };

    image.src = src;

    return subject.asObservable();
}
