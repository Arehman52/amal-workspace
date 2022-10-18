import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseProgressComponent } from './case-progress.component';

describe('CaseProgressComponent', () => {
  let component: CaseProgressComponent;
  let fixture: ComponentFixture<CaseProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
