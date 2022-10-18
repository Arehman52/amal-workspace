import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesComponent } from './cases.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { CaseProgressComponent } from './case-progress/case-progress.component';
import { SlidesComponent } from './slides/slides.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CasesComponent, PatientDetailsComponent, CaseProgressComponent, SlidesComponent, ReportComponent]
})
export class CasesModule { }
