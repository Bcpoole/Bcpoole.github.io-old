import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject
export class Header {
  appTitle = "Brandon Poole";

  constructor(private router: Router) {
  }
}
