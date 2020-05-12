import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
/**
 * @title Basic checkboxes
 */


@Component({
  selector: 'checkbox-overview-example',
  templateUrl: 'example.html',
  styleUrls: ['checkbox-overview-example.css'],
  
})



export class CheckboxOverviewExample {
  email = new FormControl('', [Validators.required, Validators.email]);
    normal = new FormControl('', [Validators.required]);

    selected = 'best';

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }


    if (this.normal.hasError('required')) {
      return 'You must enter a value';
    }


    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */