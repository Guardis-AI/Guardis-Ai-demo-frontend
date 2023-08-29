import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MAT_DATE_FORMATS, MatRippleModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { PlaybackComponent } from 'app/modules/admin/playback/playback.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule ,MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import { ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const playbackRoutes: Route[] = [
  {
      path     : '',
      component: PlaybackComponent
  }
];
@NgModule({
  declarations: [
    PlaybackComponent
  ],
  imports: [
    RouterModule.forChild(playbackRoutes),
    CommonModule,
    Ng2SearchPipeModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatDatepickerModule, MatFormFieldModule, MatInputModule,
    
  ],
  // providers   : [
  //   {
  //       provide : MAT_DATE_FORMATS,
  //       useValue: {
  //           parse  : {
  //               dateInput: moment.ISO_8601
  //           },
  //           display: {
  //               dateInput         : 'LL',
  //               monthYearLabel    : 'MMM YYYY',
  //              // dateA11yLabel     : 'LL',
  //              // monthYearA11yLabel: 'MMMM YYYY'
  //           }
  //       }
  //   },
  //   //{ provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  // ]
})
export class PlaybackModule { }
