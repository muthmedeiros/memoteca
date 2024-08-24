import { Component } from '@angular/core';
import { ThoughtCardModel } from '../thought-card/thought-card.model';
import { ThoughtCardTypes } from '../thought-card/thought-card.types';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrl: './list-thoughts.component.css',
})
export class ListThoughtsComponent {
  thoughtsList: Array<ThoughtCardModel> = [
    new ThoughtCardModel(
      ThoughtCardTypes.Type1,
      'I love Angular',
      'Murilo Medeiros'
    ),
    new ThoughtCardModel(
      ThoughtCardTypes.Type2,
      'I love Angularrrrrr',
      'Muthmuth'
    ),
    new ThoughtCardModel(
      ThoughtCardTypes.Type3,
      'I loooooove Angular',
      'medeirosValle'
    ),
  ];

  constructor() {}
}
