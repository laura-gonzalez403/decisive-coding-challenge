import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app-service';
import { FriendDropDown } from '../dropdown/dropdown/list-dropdown';
import { People } from '../model/people.model';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss'],
  providers: [AppService]
})
export class CreatePersonComponent implements OnInit {
  friends: FriendDropDown[] = [
    {
      id: 1,
      name: 'Gwendolyn Jensen'
    },
    {
      id: 2,
      name: 'Carey Holder'
    },
    {
      id: 3,
      name: 'Carey Holder'
    }
  ];

  newPersonForm: FormGroup;

  constructor(private appService: AppService,
    private router: Router) { }

  ngOnInit(): void {
    this.newPersonForm = new FormGroup({
      'id': new FormControl(null),
      'isActive': new FormControl(null),
      'balance': new FormControl(null),
      'picture': new FormControl(null),
      'age': new FormControl(null),
      'eyeColor': new FormControl(null),
      'name': new FormControl(null),
      'gender': new FormControl(null),
      'company': new FormControl(null),
      'email': new FormControl(null),
      'phone': new FormControl(null),
      'about': new FormControl(null),
      'registered': new FormControl(null),
      'latitude': new FormControl(null),
      'longitude': new FormControl(null),
      'tags': new FormControl(null),
      'friends': new FormControl(null),
    });
  }

  onSubmit() {
    debugger;
    const newPersonAdd: People = Object.assign({}, this.newPersonForm.value);

    this.appService.createPerson(newPersonAdd);

    this.router.navigate(['people']);
  }

}
