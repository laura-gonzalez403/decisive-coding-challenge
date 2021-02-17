import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app-service';
import { People } from '../model/people.model';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  providers: [AppService]
})
export class PersonComponent implements OnInit {

  personDetail: People;

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private appService: AppService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.form = this.formUpdate();

  }

  formUpdate(): FormGroup {
    return this.fb.group({
      name: '',
      isActive: '',
      age: '',
      about:'',
      gender:''
    })

  }

  ngOnInit(): void {

    let currentRoute = this.activatedRoute.snapshot.params['id'];

    this.appService.findPersonById(currentRoute)
      .subscribe(personRes => {
        this.personDetail = personRes;
        JSON.stringify(this.personDetail);
        this.form.patchValue(this.personDetail);
      })

    
  }

  onSubmit() {
    let currentRoute = this.activatedRoute.snapshot.params['id'];
    const personUpdated: People = Object.assign({}, this.form.value);
    this.appService.updatePerson(currentRoute, personUpdated);

    this.router.navigate(['people', currentRoute]);
  }
  
}
