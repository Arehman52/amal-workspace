import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AddEditAnnotationsComponent } from './add-edit-annotations/add-edit-annotations.component';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown9';
import * as jquery from 'jquery';
import { ListItem } from 'ng-multiselect-dropdown9/multiselect.model';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, AfterViewInit {
  selectedItems: ListItem[] = [];
  dropdownSettings: IDropdownSettings = {};
  dropdownList: any[] = [];
	// @ContentChildren(MultiSelectComponent) divs!: QueryList<MultiSelectComponent | any> ;
	// @ContentChildren(MultiSelectComponent) divs!: QueryList<any> ;
  // @ViewChildren('divs') divs!:QueryList<HTMLDivElement>;
  // @ViewChild('divs') divs!:QueryList<ElementRef>;
  constructor(private modalService: NgbModal) {
    // this.selectedItems = [
    //   // { id: 3, text: 'Margins', colorClass: 'skyBlue', isDisabled: false },
    // ];
  }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked ==== this.divs ::');
  //   console.log(this.divs);
  // }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit  === this.divs ::');
    // console.log(this.divs);
    // console.log(this.divs.toArray()[0].nativeElement.innerHTML);
    // console.log(this.divs.toArray()[0]?.nativeElement);
    this.dropdownList = [
      { id: 1, text: 'Mitosis (metaphase)', colorClass: 'purple' },
      { id: 2, text: 'Mitosis (telophase)', colorClass: 'salmon'  },
      { id: 3, text: 'Margins', colorClass: 'skyBlue'  },
      { id: 4, text: 'Dept of invasion', colorClass: 'purple'  },
      { id: 5, text: 'TX', colorClass: 'purple'  },
      { id: 6, text: 'Mitosis (metaphase)', colorClass: 'purple'  },
      { id: 8, text: 'Mitosis (telophase)', colorClass: 'purple'  },
      { id: 7, text: 'Margins', colorClass: 'pink'  },
      { id: 9, text: 'Dept of invasion', colorClass: 'purple'  },
      { id: 10, text: 'TX', colorClass: 'purple'  },
    ];








  }



  onDropdownClick(e: any) {
    let el = jquery('#ng-multiselect');
    let lis = el[0]?.children[0]?.childNodes[1]?.childNodes[1]?.childNodes;
    lis.forEach((val) => {
      let divElement = val.childNodes[1] as HTMLDivElement;
      divElement?.classList.add(this.dropdownList.filter(x => x['text'] == divElement.innerText)[0]?.colorClass);
    })
  }
  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: true,
      maxHeight: 600,
      idField: 'id',
      textField: 'text',
      closeDropDownOnSelection: true,
      selectAllText: 'Select All',
      searchPlaceholderText: 'Search for classes',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  onItemSelect(item: any) {
    let el = jquery('#ng-multiselect')[0].children[0].childNodes[0].childNodes[0] as HTMLElement;
    let span = el.children[0] as HTMLSpanElement;
    let s = document.createElement('span');
    var classExtracted = '';
    this.dropdownList.forEach((val, i) => {
      if(val.text == item.text){
        classExtracted = this.dropdownList[i]?.colorClass;
        return;
      }
    });
    this.selectedItems = [{id: item?.id, text: item?.text, colorClass: classExtracted , isDisabled: false}];
    console.log(item);
    console.log(classExtracted);
    span.classList.add(classExtracted);
    s.setAttribute('class', 'selectedColor');
    span.prepend(s);

  }
  onSelectAll(items: any) {
    console.log(items);
  }

  openModal(){

    let obj: NgbModalOptions;
		const modRef = this.modalService.open(AddEditAnnotationsComponent,
      {
        centered: true,
        backdrop: 'static',
        keyboard: false,
        // size: 'lg',
        windowClass: 'w70'
      });
      modRef.componentInstance.signals.subscribe((ev: any) => {
        if (ev && ev.hasOwnProperty('type') && ev.type === 'CLOSE') {
          window.location.reload();
        }
      });
  }
}
