import { Component, OnInit } from '@angular/core';
import { SquishmallowCard } from 'src/app/models/squishmallow-card.model';
import { SquishmallowService } from 'src/app/services/squishmallow.service';

@Component({
  selector: 'collection-view',
  templateUrl: './collection-view.component.html',
  styleUrls: ['./collection-view.component.css'],
  standalone: false
})
export class CollectionViewComponent implements OnInit {

  readonly DEFAULT_CARD: SquishmallowCard = {} as SquishmallowCard;
  cards: SquishmallowCard[] = [];
  selectedCard: SquishmallowCard = this.DEFAULT_CARD;
  isCardSelected = false;

  constructor(private service: SquishmallowService) { }

  ngOnInit(): void {
    this.service.getDataBase().then(res => {
      this.cards = res.list;
      console.log(res.list);
    });
  }

  updateSelectedCard(event: SquishmallowCard) {
    console.log(event.id);
    if (event) {
      this.isCardSelected = true;
      this.selectedCard = event;
    }
  }

  closeCardView(event: MouseEvent) {
    const ref = event.target as HTMLElement;
    const canClose = ref.className === "overlay" ||
      (ref.parentElement && ref.parentElement.className === "close-button") ||
      (ref.parentElement!.parentElement && ref.parentElement!.parentElement.className === "close-button");
    if (canClose) {
      this.isCardSelected = false;
      this.selectedCard = this.DEFAULT_CARD;
    }
  }
}
