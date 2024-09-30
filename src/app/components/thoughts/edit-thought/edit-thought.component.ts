import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrl: './edit-thought.component.css',
})
export class EditThoughtComponent {
  thought?: Thought;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service
        .getById(parseInt(id))
        .subscribe((thought) => (this.thought = thought));
      // TODO: create loading state on template with ngIf
      return;
    }

    this.router.navigate(['/list-thoughts']);
    alert('Pensamento não encontrado!');
  }

  editThought() {
    this.service.edit(this.thought!).subscribe(() => {
      this.router.navigate(['/list-thoughts']);
    });
  }

  cancel() {
    this.router.navigate(['/list-thoughts']);
  }
}
