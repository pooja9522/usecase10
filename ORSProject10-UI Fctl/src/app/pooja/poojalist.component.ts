import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-poojalist',
  templateUrl: './poojalist.component.html',
  styleUrls: ['./poojalist.component.css']
})
export class PoojalistComponent extends BaseListCtl implements OnInit {
  myKey = "";
  errorMessageName: string = '';


  public form = {
    error: false,
    message: null,
    preload: [],
    data: { id: null },
    inputerror: {},
    searchParams: {},
    searchMessage: null,
    list: [],
    pageNo: 0
  };

  base64Data: any;
  retrieveResonse: any;
  message: string;

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.POOJA, locator, route);
  }


  validateName(event: KeyboardEvent): void {
    const inputValue = (event.target as HTMLInputElement).value;
    const inputChar = event.key;
    const alphabetPattern = /^[a-zA-Z]*$/;  // Pattern to match only alphabetic characters

    if (!alphabetPattern.test(inputChar) && !['Backspace', 'Delete', 'Tab'].includes(inputChar)) {
      event.preventDefault();
      this.errorMessageName = 'Only alphabets are allowed.';
      return;
    }

    if (inputValue.length < 3) {
      this.errorMessageName = 'name must be at least 3 characters .';
    } else if (inputValue.length > 15) {
      this.errorMessageName = 'name must contain only 15 character.';
    } else {
      this.errorMessageName = '';  // Clear error message if valid
    }
  }

  validateAlphabetInput(event) {
    const charCode = event.which || event.keyCode;
    const charStr = String.fromCharCode(charCode);

    // Regular expression to test if the character is a letter
    if (!/^[a-zA-Z]+$/.test(charStr)) {
      event.preventDefault();
    }
  }


 
}



















































