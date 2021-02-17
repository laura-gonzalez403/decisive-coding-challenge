import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { People } from './model/people.model';

@Injectable()

export class AppService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4500/people';

  findAllPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.url);
  }

  findPersonById(id: number): Observable<People> {
    return this.http.get<People>(`${this.url}/${id}`);
  }

  updatePerson(personUpdate: People) {
    this.http.put(this.url, personUpdate)
      .subscribe(res => console.log(res));
  }
  createPerson(addPerson: People) {
    this.http.post(this.url, addPerson)
      .subscribe(res => console.log(res));
  }

  deletePerson(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
