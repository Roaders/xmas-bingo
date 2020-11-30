import 'bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { CallerComponent } from './components/caller/caller.component';
import { PlayerComponent } from './components/player/player.component';
import { EntryComponent } from './components/entry/entry.component';

@NgModule({
    declarations: [
        AppComponent,
        CallerComponent,
        PlayerComponent,
        EntryComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
