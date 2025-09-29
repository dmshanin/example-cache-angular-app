import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ApiData, StaticData } from '../../models';

@Component({
  selector: 'app-browser-cache',
  templateUrl: './browser-cache.component.html',
  styleUrls: ['./browser-cache.component.css'],
  standalone: false,
})
export class BrowserCacheComponent {
  data: ApiData | StaticData | null = null;
  loading = false;

  constructor(private apiService: ApiService) {}

  fetchData(): void {
    this.loading = true;
    this.apiService.getData().subscribe({
      next: (result) => {
        this.data = result;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error:', error);
        this.loading = false;
      }
    });
  }

  fetchStaticData(): void {
    this.apiService.getStaticData().subscribe({
      next: (result) => {
        this.data = result;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}