import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent {

  fullnameInput: FormControl = new FormControl('', [Validators.required]);
  hobbieInput: FormControl = new FormControl('', [Validators.required]);
  birthdayInput: FormControl = new FormControl('', [Validators.required]);
  cardInput: FormControl = new FormControl('', [Validators.required]);

  constructor() {

  }

}
