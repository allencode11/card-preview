import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  styles: ['.btn:hover { opacity: 0; color: white; }']
})
export class CardComponent {
  @Input() imgSrc: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() btnContent: string = '';
  @Input() hexColor: string = '';
}
