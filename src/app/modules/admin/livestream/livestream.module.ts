import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LivestreamComponent } from './livestream.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HlsVideoPlayerDirective } from './hls-video-player.directive';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_FORMATS, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import * as moment from 'moment';
const livestreamRoute: Route[] = [
  {
      path     : '',
      component: LivestreamComponent
  }
];

@NgModule({
  declarations: [
    LivestreamComponent,
    HlsVideoPlayerDirective],
  imports: [
    RouterModule.forChild(livestreamRoute),
    Ng2SearchPipeModule,
  //     MatProgressSpinnerModule,
    FormsModule,
    CommonModule,
  //   MatInputModule,
  //  MatMomentDateModule,
    // MatExpansionModule,
    // NgxMaterialTimepickerModule,
    // MatCardModule,
    MatDatepickerModule, MatFormFieldModule, MatInputModule,ReactiveFormsModule,
  ],
  providers   : [
    {
        provide : MAT_DATE_FORMATS,
        useValue: {
          parse: {
            dateInput: 'l, LTS',
          },
          display: {
            dateInput: 'ddd D MMM YYYY',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
          },
        }
    }
]
})
export class LivestreamModule { }
