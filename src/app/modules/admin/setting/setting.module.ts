import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SettingComponent } from 'app/modules/admin/setting/setting.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
const SettingRoutes: Route[] = [
    {
        path     : '',
        component: SettingComponent
    }
];
@NgModule({
    declarations: [
        SettingComponent,
    ],
    imports     : [
        RouterModule.forChild(SettingRoutes),
        FormsModule, 
        CommonModule
    ]
})
export class SettingModule
{
}
