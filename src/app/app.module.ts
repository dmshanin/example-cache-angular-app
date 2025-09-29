import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { NavigationComponent } from './components/navigation/navigation.component';
import { DataDisplayComponent } from './components/data-display/data-display.component';
import { RefreshButtonComponent } from './components/refresh-button/refresh-button.component';

// Pages
import { BrowserCacheComponent } from './pages/browser-cache/browser-cache.component';
import { ManualCacheComponent } from './pages/manual-cache/manual-cache.component';
import { ShareReplayComponent } from './pages/share-replay/share-replay.component';

@NgModule({
  declarations: [
    AppComponent,

    NavigationComponent,
    DataDisplayComponent,
    RefreshButtonComponent,

    BrowserCacheComponent,
    ManualCacheComponent,
    ShareReplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }