import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrl: './create-thought.component.css',
})
export class CreateThoughtComponent {
  thought = {
    id: '1',
    content: 'Aprendendo Angular',
    authorship: 'Dev',
    model: 'model1',
  };

  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {}

  create() {
    alert('Novo pensamento criado!');
  }

  cancel() {
    this.router.navigate(['/list-thoughts']);

    // TODO: implement check if there's back page
    // this.location.back();
  }
}
