import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app-service';
import { People } from '../model/people.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  providers: [AppService]
})
export class PeopleListComponent implements OnInit {


  people$: Observable<People[]>;

  constructor(private router: Router,
    private appService: AppService) { }

  ngOnInit() {
    this.people$ = this.appService.findAllPeople();

  }
  editPerson(id) {
    this.router.navigate(['people', id, 'edit']);

  }
}
