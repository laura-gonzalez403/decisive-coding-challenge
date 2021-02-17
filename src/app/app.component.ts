import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app-service';
import { People } from './model/people.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})


export class AppComponent {
  title = '';

  people$: Observable <People[]>;

  constructor(private router: Router,
    private appService: AppService) { }

  ngOnInit() {
    this.people$ = this.appService.findAllPeople();

  }
  editPerson(id) {
    this.router.navigate(['people', id, 'edit']);
    
  }
}
