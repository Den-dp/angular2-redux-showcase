import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CounterAppComponent} from './app.component';
import {UiModule} from './ui/ui.module';

import {AppState} from './app-state'
import {AppStore} from './app-store';
import {StoreEnhancer, Store, createStore} from 'redux';
import {counterReducer} from './counter-reducer';

let devtools: StoreEnhancer<AppState> =
    window['devToolsExtension'] ?
        window['devToolsExtension']() : f => f;

let store: Store<AppState> = createStore<AppState>(counterReducer, devtools);

@NgModule({
    imports: [BrowserModule, UiModule],
    declarations: [CounterAppComponent],
    bootstrap: [CounterAppComponent],
    providers: [
        {provide: AppStore, useValue: store }
    ]
})
export class AppModule {
}
