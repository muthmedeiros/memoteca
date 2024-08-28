import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrl: './delete-thought.component.css',
})
export class DeleteThoughtComponent {
  thought!: Thought;

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
    }
  }

  deleteThought() {
    if (this.thought.id) {
      this.service.delete(this.thought.id).subscribe(() => {
        this.router.navigate(['/list-thoughts']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/list-thoughts']);
  }
}
