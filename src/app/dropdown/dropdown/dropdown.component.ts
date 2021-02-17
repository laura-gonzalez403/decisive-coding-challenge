import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FriendDropDown } from './list-dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor {

  @Input() options: FriendDropDown[]; 
  @Input() placeHolder = 'Select friend';

  constructor() { }

  value: number;

  onChange: (value: number) => void;
  onTouched: any = () => { };


  registerOnChange(onChange: (value: number) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  onSelectionChange($event) {
    this.onChange($event.value);
  }

  writeValue(value) {

    let selectedValue = this.options.find(item => item.id == value);

    if (selectedValue != null)
      this.changeMessage(selectedValue);
  }

  changeMessage(option: any) {
    this.onChange(option.id);
    this.value = option.id;
    this.placeHolder = option.name;
  }

}
