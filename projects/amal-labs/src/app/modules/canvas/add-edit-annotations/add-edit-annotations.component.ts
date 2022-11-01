import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-edit-annotations',
  templateUrl: './add-edit-annotations.component.html',
  styleUrls: ['./add-edit-annotations.component.scss']
})
export class AddEditAnnotationsComponent implements OnInit {
  createAnnotationForm: FormGroup;
  annoClasses: {name: string, id: string}[] = [
    {id: '1', name: 'B01'},
    {id: '2', name: 'B012'},
    {id: '3', name: 'B03'},
    {id: '4', name: 'B04'},
  ]
  isFormSubmitted: boolean = false;

  constructor(private modal: NgbActiveModal, public fb: FormBuilder) {

    this.createAnnotationForm = this.fb.group({
      'shape' : new FormControl(null),
      'name' : new FormControl(null, [Validators.required]),
      'class' : new FormControl(null, [Validators.required]),
      'description' : new FormControl(null),
    });
  }

  ngOnInit() {
  }

  isControlValid(
    control: string,
    validatorType:
      | 'required'
      | 'email'
      | 'pattern'
      | 'minlength'
      | 'maxlength'
      | 'inValidFormat' = 'required'
  ): boolean {
    return (this.isFormSubmitted && this.createAnnotationForm?.get(control)?.hasError(validatorType)) as boolean;
  }

  SaveAnnotation(){
    this.isFormSubmitted = true;
    if(this.createAnnotationForm.invalid){
      return;
    }else{
      console.log(this.createAnnotationForm.value);
      // create the annotation here, call the api.
    }
  }

  onChangeAnnotationClass(annoClass: any)  {

  }
  onClose(){
    this.modal.close();
  }
}
