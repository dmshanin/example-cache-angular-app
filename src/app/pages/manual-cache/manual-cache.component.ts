import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { TimeData } from '../../models';

@Component({
  selector: 'app-manual-cache',
  templateUrl: './manual-cache.component.html',
  styleUrls: ['./manual-cache.component.css'],
  standalone: false,
})
export class ManualCacheComponent {
  data: TimeData | null = null;
  loading = false;
  private cache = new Map<string, TimeData>();

  constructor(private apiService: ApiService) {}

  fetchWithCache(): void {
    const cacheKey = 'manual-cache-data';
    
    if (this.cache.has(cacheKey)) {
      this.data = this.cache.get(cacheKey)!;
      return;
    }

    this.loading = true;
    this.apiService.getTime().subscribe({
      next: (result) => {
        this.cache.set(cacheKey, result);
        this.data = result;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error:', error);
        this.loading = false;
      }
    });
  }

  clearCache(): void {
    this.cache.clear();
    this.data = null;
  }
}