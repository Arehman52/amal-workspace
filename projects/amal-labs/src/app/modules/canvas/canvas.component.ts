import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AddEditAnnotationsComponent } from './add-edit-annotations/add-edit-annotations.component';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown9';
import { ListItem } from 'ng-multiselect-dropdown9/multiselect.model';

declare var OpenSeadragon: any;
declare var Annotorious: any;
import * as jquery from 'jquery';


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, AfterViewInit {
  viewer: any;
  anno: any;
  LIST: any[] = [];
  createMode: boolean = false;


  selectedItems: ListItem[] = [];
  dropdownSettings: IDropdownSettings = {};
  dropdownList: any[] = [];
  sideIconsList: IconsList[] = [];
  constructor(private modalService: NgbModal) { }
  ngAfterViewInit(): void {

    this.anno.on('createAnnotation', async (selection: any) => {
      this.anno.setDrawingEnabled(false);
      if (selection) {
        selection.body = [{
          type: 'TextualBody',
          purpose: 'tagging',
          value: 'MyTag'
        }];
        this.LIST.push(selection);
      }
      // Make sure to wait before saving!
      await this.anno.updateSelected(selection);
      this.anno.saveSelected();
    });

    this.anno.on('selectAnnotation', function(annotation: any) {
      alert("selectAnnotation");
    });
    this.anno.on('createSelection', function(annotation: any) {
      jquery('#openModalBtn').click();
    });
    // this.anno.on('mouseEnterAnnotation', function(annotation: any) {
    //   alert("mouseEnterAnnotation");
    // });
    // this.anno.on('mouseLeaveAnnotation', function(annotation: any) {
    //   alert("mouseLeaveAnnotation");
    // });
    // this.anno.on('startSelection', function(annotation: any) {  // when user starts drawing the annotation: any
    //   alert("startSelection");
    // });
    this.anno.on('updateAnnotation', function(annotation: any) {
      alert("updateAnnotation");
    });
    // this.anno.on('cancelSelected', function(annotation: any) {
    //   alert("cancelSelected");
    // });
    this.anno.on('changeSelected', function(annotation: any) {
      alert("changeSelected");
    });
    this.anno.on('changeSelectionTarget', function(annotation: any) {
      alert("changeSelectionTarget");
    });
    this.anno.on('deleteAnnotation', function(annotation: any) {
      alert("deleteAnnotation");
    });

    // this.anno.setDrawingEnabled(true);

    // this.anno.addAnnotation(this.sampleAnnotation);
    this.sideIconsList = [
      { imgSrc: 'assets/images/mover_arrows.svg', action: 'move'  },
      { imgSrc: 'assets/images/vector.svg', action: 'duplicator'  },
      { imgSrc: 'assets/images/circle.svg', action: 'circle'  },
      { imgSrc: 'assets/images/ellipse.svg', action: 'ellipse'  },
      { imgSrc: 'assets/images/freehand.svg', action: 'freehand'  },
      { imgSrc: 'assets/images/flag.svg', action: 'flag'  },
      { imgSrc: 'assets/images/toolsSepratorLine.svg', action: 'seprator'  },
      { imgSrc: 'assets/images/zoomin.svg', action: 'zoomin'  },
      { imgSrc: 'assets/images/zoomout.svg', action: 'zoomout'  },
      { imgSrc: 'assets/images/fullscreen.svg', action: 'fullscreen'  },
    ]
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
    let that = this;

    // ////////////////////IF IMAGE TO BE ADDED LOCALLY!!!!!
    // this.viewer = OpenSeadragon({
    //   id: 'openseadragon',
    //   prefixUrl:
    //   'https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/',
    //   tileSources: {
    //     type: 'image',
    //     url: 'assets/js/openseadragon/image.jpg',
    //   },
    // });
    // ////////////////////IF IMAGE TO BE ADDED LOCALLY!!!!!

    this.viewer = OpenSeadragon({
      id: "openseadragon",
      prefixUrl: 'https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/',
      animationTime: 0.5,
      blendTime: 0.1,
      constrainDuringPan: true,
      maxZoomPixelRatio: 2,
      minZoomLevel: 1,
      visibilityRatio: 1,
      zoomPerScroll: 2,
      timeout: 60000,
      showNavigator:  true,
      showRotationControl: true,
      sequenceMode: true,
      tileSources: [
        'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000001.jp2/info.json',
        'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000002.jp2/info.json',
        'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000003.jp2/info.json',
        'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000004.jp2/info.json',
        'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000005.jp2/info.json',
        'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000006.jp2/info.json',
        'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000007.jp2/info.json',
      ],
  });

  this.viewer.addHandler('open', function() {
    that.viewer?.scalebar({
        pixelsPerMeter: 0.22 ? (1e6 / 0.22) : 0,
    });
});
    // this.viewer = OpenSeadragon({
    //   id: 'openseadragon',
    //   prefixUrl:
    //     'https://cdn.jsdelivr.net/npm/openseadragon@2.3/build/openseadragon/images/',

    //   preserveViewport: true,
    //   visibilityRatio: 1,
    //   minZoomLevel: 1,
    //   defaultZoomLevel: 1,
    //   sequenceMode: true,
    //   tileSources: [
    //     'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000001.jp2/info.json',
    //     'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000002.jp2/info.json',
    //     'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000003.jp2/info.json',
    //     'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000004.jp2/info.json',
    //     'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000005.jp2/info.json',
    //     'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000006.jp2/info.json',
    //     'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000007.jp2/info.json',
    //   ],
    // });

    let config = {
      disableEditor: true,
      // formatter: this.ColorFormatter,
      // formatters: this.ColorFormatter,
      hotkey: { key: 'shift', inverted: true },
      allowEmpty: true,
      drawOnSingleClick: true,

      };


      // annotator = OpenSeadragon.Annotorious(viewer, config);


      this.anno = OpenSeadragon.Annotorious(this.viewer, config);
      // Annotorious.SelectorPack(this.anno);
      this.anno.setDrawingEnabled(true);

    // this.anno = OpenSeadragon.Annotorious(this.viewer, {
    //   locale: 'auto',
    //   formatter: this.formatter,
    //   allowEmpty: true,
    //   drawOnSingleClick: true,
    //   hotkey: { key: 'shift', inverted: true },
    //   disableEditor: true,
    // });

    // Init the plugin
    Annotorious.SelectorPack(this.anno);






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
        windowClass: 'add-annotation-modal-width'
      });
      modRef.componentInstance.signals.subscribe((ev: any) => {
        if (ev && ev.hasOwnProperty('type') && ev.type === 'CLOSE') {
          window.location.reload();
        }
      });
  }
  setTool(tool: string = 'circle') {
    // this.anno.setDrawingEnabled(true);
    // this.anno.setDrawingTool(tool);
  }
  performAction(action: string){
    switch (action) {
      case 'circle' || 'freehand' || 'ellipse':
        // setTool(action);
        break;

      default:
        break;
    }
  }



  // ColorFormatter(annotation) {
  //   let classification = annotation.bodies.find((b: { purpose: string; }) => b.purpose == 'classification');

  //   if (classification) {
  //     return {
  //       'style': 'stroke:' + classification.value.color + '; stroke-width:3;'
  //     };
  //   }
  // }
}


export interface IconsList {
  imgSrc: string;
  action: string;
}
