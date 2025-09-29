import { Component } from '@angular/core';
import { BehaviorSubject, switchMap, shareReplay, Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { TimeData } from '../../models';

@Component({
  selector: 'app-share-replay',
  standalone: false,
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css']
})
export class ShareReplayComponent {
  data$: Observable<TimeData>;
  private refresh$ = new BehaviorSubject<void>(undefined);

  constructor(private apiService: ApiService) {
    this.data$ = this.refresh$.pipe(
      switchMap(() => this.apiService.getTime().pipe(
        shareReplay({ bufferSize: 1, refCount: true })
      ))
    );
  }

  refreshData(): void {
    this.refresh$.next();
  }
}