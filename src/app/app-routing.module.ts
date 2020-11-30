import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { CallerComponent } from './components/caller/caller.component';
import { EntryComponent } from './components/entry/entry.component';
import { PlayerComponent } from './components/player/player.component';

const routes: Routes = [
    { path: 'caller', component: CallerComponent },
    { path: 'player', component: PlayerComponent },
    { path: '**', component: EntryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
