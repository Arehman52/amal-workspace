import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ISignal } from '../models/general-shared.models';

@Injectable({
  providedIn: 'root'
})
export class AmalCustomSharedService {

reloadAppointments: Subject<ISignal>;
// expandedView: BehaviorSubject<IAction | null>;
unsaved_changes: boolean;
private profileObs$: BehaviorSubject<any>;

public isFormSubmitted = new BehaviorSubject<IFormClicked>({fromLocation: '', isFormSubmitted: false, isFormValid: false, triggerSubmit: false});

constructor() {
  this.unsaved_changes = false;
  this.reloadAppointments = new Subject();
  // this.expandedView = new BehaviorSubject();
  this.profileObs$ = new BehaviorSubject({ name: 'Locations' });
}

setSubMenuEvent(value: any): void {
  this.profileObs$.next(value);
}

getSubMenuEvent(): Observable<any> {
  return this.profileObs$.asObservable();
}

get unsavedChanges(): boolean {
  return this.unsaved_changes;
}

set unsavedChanges(value: boolean) {
  this.unsaved_changes = value;
}

}


export interface IFormClicked{
  fromLocation: string;
  isFormSubmitted: boolean;
  isFormValid: boolean;
  triggerSubmit: boolean;
}

export interface IAction {
	action: 'EXPAND' | 'COLAPSE';
	data?: any;
}
