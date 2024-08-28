import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Thought } from './thought';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API_URL = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Thought[]> {
    return this.http
      .get<Thought[]>(this.API_URL)
      .pipe(
        map((thoughtsData: Thought[]) => thoughtsData.map(Thought.fromMap))
      );
  }

  getById(id: number): Observable<Thought> {
    const url = `${this.API_URL}/${id}`;
    return this.http.get<Thought>(url);
  }

  create(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API_URL, thought);
  }

  delete(id: number): Observable<Thought> {
    const url = `${this.API_URL}/${id}`;
    return this.http.delete<Thought>(url);
  }
}
