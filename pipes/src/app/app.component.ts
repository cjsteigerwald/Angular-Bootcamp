import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  date = '';
  amount = 0.0;
  height = 0.0;
  miles = 0.0;
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  };

  onNameChange(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    if(value != null) {
      this.name = value;
    }
  }

  onDateChange(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    if(value != null) {
      this.date = value;
    }
  }

  onAmountChange(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    const parsedValue = parseFloat(value);

    if(!isNaN(parsedValue)) {
      this.amount = parsedValue;
    }
  }

  onHeightChange(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    const parsedValue = parseFloat(value);

    if(!isNaN(parsedValue)) {
      this.height = parsedValue;
    }
  }

  onMilesChange(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    const parsedValue = parseFloat(value);

    if(!isNaN(parsedValue)) {
      this.miles = parsedValue;
    }
  }

}
