import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app-service';
import { People } from '../model/people.model';
import { filter } from 'rxjs/operators';
import { isActive } from '../dropdown/dropdown/list-dropdown';

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
      name: ['', [
        Validators.required,
        Validators.minLength(70)
      ]],
      isActive: '',
      age: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.minLength(3),
      ]],
      about: ['', [
        Validators.minLength(250)
      ]],
      gender: ['', [
        Validators.required
      ]],
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


  save() {
    //attempt to save to draft to local storage

    const draft = localStorage.getItem("person");

    if (draft) {
      this.form.setValue(JSON.parse(draft));

    }

    this.form.valueChanges
      .pipe(
        filter(() => this.form.valid))
      .subscribe(val => localStorage.setItem("person", JSON.stringify(val)))
  }



  onSubmit() {
    let currentRoute = this.activatedRoute.snapshot.params['id'];

    const personUpdated: People = Object.assign({}, this.form.value);

    this.appService.updatePerson(currentRoute, personUpdated);


    this.router.navigate(['people', currentRoute]);
  }

}
