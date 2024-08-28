// import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Thought } from '../thought';
import { ThoughtType } from '../thought-types';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrl: './create-thought.component.css',
})
export class CreateThoughtComponent {
  thought: Thought = new Thought(ThoughtType.Type1, '', '');

  constructor(
    // private location: Location,
    private router: Router,
    private service: ThoughtService
  ) {}

  ngOnInit(): void {}

  create() {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/list-thoughts']);
    });
  }

  cancel() {
    this.router.navigate(['/list-thoughts']);

    // TODO: implement check if there's back page
    // this.location.back();
  }
}
