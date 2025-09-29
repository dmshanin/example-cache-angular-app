import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  standalone: false,
})
export class NavigationComponent {
  navItems = [
    { path: '/browser-cache', label: 'Браузерный кэш' },
    { path: '/manual-cache', label: 'Ручное кэширование' },
    { path: '/share-replay', label: 'Кэширование потоков' }
  ];
}