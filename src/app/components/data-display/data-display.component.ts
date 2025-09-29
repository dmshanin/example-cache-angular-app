import { Component, Input } from '@angular/core';
import { CacheableData } from '../../models';

@Component({
  selector: 'app-data-display',
  standalone: false,
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent {
  @Input() data: CacheableData | null | undefined = null;
  @Input() title: string = '';
  @Input() description: string = '';
}