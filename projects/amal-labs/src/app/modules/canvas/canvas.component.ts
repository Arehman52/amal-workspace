import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown9';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  dropdownList: any[] = [
    { id: 1, text: 'Mumbai' },
    { id: 2, text: 'Bangaluru' },
    { id: 3, text: 'Pune' },
    { id: 4, text: 'Navsari' },
    { id: 5, text: 'New Delhi' },
  ];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};

  constructor() {
    this.dropdownList = [
      { id: 1, text: 'Mumbai' },
      { id: 2, text: 'Bangaluru' },
      { id: 3, text: 'Pune' },
      { id: 4, text: 'Navsari' },
      { id: 5, text: 'New Delhi' },
    ];
    this.selectedItems = [
      // { id: 3, text: 'Pune' },
      // { id: 4, text: 'Navsari' },
    ];
  }
  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    debugger
  }
  onSelectAll(items: any) {
    console.log(items);
    debugger
  }
}
