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
}
