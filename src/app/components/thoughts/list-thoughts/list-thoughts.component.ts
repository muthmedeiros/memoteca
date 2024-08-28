import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrl: './list-thoughts.component.css',
})
export class ListThoughtsComponent {
  thoughtsList: Thought[] = [];

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((thoughtsList) => {
      this.thoughtsList = thoughtsList;
      console.log(this.thoughtsList);
    });
  }
}
