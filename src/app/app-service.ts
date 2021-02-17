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

  findPersonById(id: string): Observable<People> {
    return this.http.get<People>(`${this.url}/${id}`);
  }

  updatePerson(id: string, personUpdate: People) {
    debugger;
    this.http.put<{ form: string }>(`${this.url}/${id}`, personUpdate)
      .subscribe(res => console.log(res));
  }
  createPerson(addPerson: People) {
    this.http.post(this.url, addPerson)
      .subscribe(res =>
        console.log(res));
  }

  deletePerson(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
