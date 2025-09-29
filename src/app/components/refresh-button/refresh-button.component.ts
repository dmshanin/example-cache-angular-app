import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.css'],
  standalone: false,
})
export class RefreshButtonComponent {
  @Input() loading: boolean = false;
  @Input() label: string = 'Обновить данные';
  @Output() onRefresh = new EventEmitter<void>();

  handleClick(): void {
    this.onRefresh.emit();
  }
}