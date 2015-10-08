//import {computedFrom} from 'aurelia-framework';

export class Welcome {
  heading = 'Under Construction!';
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
