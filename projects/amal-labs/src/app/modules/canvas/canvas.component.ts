import { AfterViewChecked, AfterViewInit, Component, ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IDropdownSettings, MultiSelectComponent } from 'ng-multiselect-dropdown9';
import * as jquery from 'jquery';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, AfterViewInit {
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};
  dropdownList: any[];
	// @ContentChildren(MultiSelectComponent) divs!: QueryList<MultiSelectComponent | any> ;
	// @ContentChildren(MultiSelectComponent) divs!: QueryList<any> ;
  // @ViewChildren('divs') divs!:QueryList<HTMLDivElement>;
  @ViewChild('divs') divs!:QueryList<ElementRef>;
  constructor() {
    this.dropdownList = [
      { id: 1, text: 'Mumbai', isDisabled: false },
      { id: 2, text: 'Bangaluru', isDisabled: false },
      { id: 3, text: 'Pune', isDisabled: false },
      { id: 4, text: 'Navsari', isDisabled: false },
      { id: 5, text: 'New Delhi', isDisabled: false },
    ];
    this.selectedItems = [
      { id: 3, text: 'Pune' },
    ];
  }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked ==== this.divs ::');
  //   console.log(this.divs);
  // }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit  === this.divs ::');
    console.log(this.divs);
    // console.log(this.divs.toArray()[0].nativeElement.innerHTML);
    // console.log(this.divs.toArray()[0]?.nativeElement);
    this.dropdownList = [
      { id: 1, text: 'Mumbai' },
      { id: 2, text: 'Bangaluru' },
      { id: 3, text: 'Pune' },
      { id: 4, text: 'Navsari' },
      { id: 5, text: 'New Delhi' },
    ];



    let el = jquery('#ng-multiselect');
    debugger





  }
  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'text',
      selectAllText: 'Select All',
      searchPlaceholderText: 'Search for classes',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
