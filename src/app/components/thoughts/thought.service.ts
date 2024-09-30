import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Thought } from './thought';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API_BASE_URL = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Thought[]> {
    return this.http
      .get<Thought[]>(this.API_BASE_URL)
      .pipe(
        map((thoughtsData: Thought[]) => thoughtsData.map(Thought.fromMap))
      );
  }

  getById(id: number): Observable<Thought> {
    const url = `${this.API_BASE_URL}/${id}`;
    return this.http.get<Thought>(url);
  }

  create(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API_BASE_URL, thought);
  }

  edit(thought: Thought): Observable<Thought> {
    const url = `${this.API_BASE_URL}/${thought.id}`;
    return this.http.put<Thought>(url, thought);
  }

  delete(id: number): Observable<Thought> {
    const url = `${this.API_BASE_URL}/${id}`;
    return this.http.delete<Thought>(url);
  }
}
