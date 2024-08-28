import { Component, Input } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-thought-card',
  templateUrl: './thought-card.component.html',
  styleUrl: './thought-card.component.css',
})
export class ThoughtCardComponent {
  @Input() thought!: Thought;

  ngOnInit(): void {}

  thoughtWidth(): string {
    if (this.thought.content.length >= 256) {
      return 'thought-g';
    }

    return 'thought-p';
  }
}
