import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserCacheComponent } from './pages/browser-cache/browser-cache.component';
import { ManualCacheComponent } from './pages/manual-cache/manual-cache.component';
import { ShareReplayComponent } from './pages/share-replay/share-replay.component';

const routes: Routes = [
  { path: '', redirectTo: '/browser-cache', pathMatch: 'full' },
  { path: 'browser-cache', component: BrowserCacheComponent },
  { path: 'manual-cache', component: ManualCacheComponent },
  { path: 'share-replay', component: ShareReplayComponent },
  { path: '**', redirectTo: '/browser-cache' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }