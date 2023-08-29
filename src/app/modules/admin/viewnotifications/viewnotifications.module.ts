import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ViewnotificationsComponent } from './viewnotifications.component';
import { FormsModule } from '@angular/forms';
import {NotificationResolver } from 'app/modules/admin/viewnotifications/viewnotification.resolver'
const viewnotificationsRoutes: Route[] = [
  {
      path     : '',
      component: ViewnotificationsComponent,
      resolve :{
        notilist : NotificationResolver
      },
     
            // path     : '',
            // component: ViewnotificationsComponent,
            children : [
                {
                    path         : ':id',
                    component    : ViewnotificationsComponent,
                    // resolve :{
                    //   notilist : NotificationResolver
                    // }
                }
           
]
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(viewnotificationsRoutes),
    CommonModule,
    FormsModule,
  ],
})
export class ViewnotificationsModule { }
