// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'angularapp';
// }

// import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { ConvertPipe } from './convert.pipe';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'currency_convertor';
//   inputForm: any = new FormGroup({
//     fromCurrency: new FormControl({ value: '', disabled: false }),
//     toCurrency: new FormControl({ value: '', disabled: false }),
//     amount: new FormControl({ value: '', disabled: false }),
//     submitButton: new FormControl({ value: '', disabled: false }),
//     resValue: new FormControl({ value: '', disabled: false })
//   })
//   currency = [{ "id": "USD", "value": 1.126735 },
//   { "id": "GBP", "value": 0.876893 },
//   { "id": "INR", "value": 79.677056 }
//   ]
//   ngOninit() {

//   }
//   submitButton() {
//     let val = new ConvertPipe().transform(this.inputForm.value.fromCurrency,this.inputForm.value.toCurrency,this.inputForm.value.amount )
//     val = String(val) + '.00'
//     this.inputForm.value.resValue = val
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  opt1:number;
  opt2:number;
  amt:number;
  res:number;
  result:string;
  exchange(a:number,b:number,amt:number){
    if(a!=null && b!=null){
      this.result=Math.round(b/a*amt).toFixed(2);
      return this.result;
    }
  }
}


