import { Component, Input } from '@angular/core';
import { SquishmallowCard } from 'src/app/models/squishmallow-card.model';

@Component({
  selector: 'card-view',
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.css',
  standalone: false
})
export class CardViewComponent {
  @Input() card!: SquishmallowCard;
  @Input() parallelType?: string;

  get alwaysVisible() {
    return [
      { label: 'Id', value: this.card.id },
      { label: 'Number', value: this.card.setId },
      { label: 'Name', value: this.card.name },
      { label: 'Set', value: this.card.set },
      { label: 'Series', value: this.card.series },
    ];
  }

  get conditionallyVisible() {
    return [
      { label: 'Squish Date', value: this.card.squishDate },
      { label: 'Collector', value: this.card.collector },
      { label: 'Squad', value: this.card.squad },
      { label: 'Squad List', value: this.card.squadList },
      { label: 'Description', value: this.card.description },
      { label: 'Front Description', value: this.card.frontDescription },
    ];
  }
}
