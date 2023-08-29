import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { MatTableModule } from '@angular/material/table';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from 'app/shared/shared.module';
import { MAT_DATE_FORMATS, MatRippleModule } from '@angular/material/core';
import { MatMomentDateModule ,MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AdddeviceComponent } from './adddevice/adddevice/adddevice.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import * as moment from 'moment';
const userRoutes: Route[] = [
  {
      path     : '',
      component: UserComponent,
      
  }
];

@NgModule({
  declarations: [UserComponent, DetailsComponent, AdddeviceComponent],
  imports: [
    RouterModule.forChild(userRoutes),
    CommonModule,
    MatRippleModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSortModule,
    MatSidenavModule,
    SharedModule,
    MatMomentDateModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatTooltipModule,
   MatDialogModule
  ],
  providers   : [
    {
        provide : MAT_DATE_FORMATS,
        useValue: {
            parse  : {
                dateInput: moment.ISO_8601
            },
            display: {
                dateInput         : 'LL',
                monthYearLabel    : 'MMM YYYY',
               // dateA11yLabel     : 'LL',
               // monthYearA11yLabel: 'MMMM YYYY'
            }
        }
    },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
]
})
export class UserModule { }
