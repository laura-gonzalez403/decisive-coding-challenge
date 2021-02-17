import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isActive } from '../dropdown/list-dropdown';

@Component({
  selector: 'app-is-active-drop-down',
  templateUrl: './is-active-drop-down.component.html',
  styleUrls: ['./is-active-drop-down.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IsActiveDropDownComponent),
      multi: true,
    }
  ]
})
export class IsActiveDropDownComponent implements ControlValueAccessor {

  @Input() options: isActive[];
  @Input() placeHolder = 'Select friend';

  constructor() { }

  value: boolean;

  onChange: (value: boolean) => void;
  onTouched: any = () => { };


  registerOnChange(onChange: (value: boolean) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  onSelectionChange($event) {
    this.onChange($event.value);
  }

  writeValue(value) {

    let selectedValue = this.options.find(item => item.isActive == value);

    if (selectedValue != null)
      this.changeMessage(selectedValue);
  }

  changeMessage(option: any) {
    this.onChange(option.isActive);
    this.value = option.isActive;
    this.placeHolder = option.isActive;
  }

}
