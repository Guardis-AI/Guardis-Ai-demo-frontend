import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Inject, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, UntypedFormBuilder, UntypedFormGroup, Validators,FormControl } from '@angular/forms';
import { UserService } from 'app/services/user.service';
import { Observable } from 'rxjs';;
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import {  Router , ActivatedRoute } from '@angular/router';
import { StreamService } from 'app/services/stream.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {map, startWith} from 'rxjs/operators';
import _ from 'lodash';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';import { UserComponent } from '../../user.component';

;
export interface UsersData {
    user_name: string;
    user_id: number;
  }

@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.scss'],
 // changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})

export class AdddeviceComponent implements OnInit {
  form: FormGroup;
  public udata: any[] = [];
  searchText:any;
  message ='';
  devicelist: string[] = ['Shop', 'Cash Register'];
  filteredOptions: Observable<string[]>;
  camtypeControl = new FormControl('');
  groupCode ='';
  UserName = new FormControl('');
  cfurl= localStorage.getItem('cfUrl')
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
      private _authService: AuthService,
      private _formBuilder: UntypedFormBuilder,
      private _snackBar: MatSnackBar,
      private _router: Router,
      private _activatedRoute: ActivatedRoute,
      private _streamService: StreamService,
      private _userService: UserService
  ) {
   
  }
 


  @ViewChild('addDeviceNgForm') addDeviceNgForm: NgForm;

  alert: { type: FuseAlertType; message: string } = {
      type   : 'success',
      message: ''
  };
  addDeviceForm: UntypedFormGroup;
  showAlert: boolean = false;

  /**
   * Constructor
   */
 

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
    
    this._userService.getCamTypes().subscribe((dt:any)=>{
      this.devicelist = dt.gai_get_distinct_camtype[0].array_agg;
    })
    this.udata  = this.data.udata;
      // Create the form
      this.addDeviceForm = this._formBuilder.group({
        p_Camera_Type : ['', Validators.required],
        p_port       : ['', Validators.required],
        start_date: [new  Date(), Validators.required],
        p_IP_Address :['',Validators.required],
        end_date :[''],
        p_url : ['',Validators.required],
        user_id :['',Validators.required],
        p_send_notification : [''],
        login_user_id : localStorage.getItem('userId'),
        p_Camdevice_id :['']
      },
      
    );
  //  this.udata  = this.data.udata;
   // this.getuserData1();
    this.filteredOptions = this.camtypeControl.valueChanges.pipe(
      startWith(''),
      map(value => this._camtypefilter(value || '')),
    );
    if(this.data.editMode=='Y'){
      console.log(this.data.datresult)
      if(this.data.datresult!=''){
        this.addDeviceForm.patchValue({'p_url': this.data.datresult.url,'p_Camera_Type' : this.data.datresult.camera_type,'p_port': this.data.datresult.port,
        'start_date':this.data.datresult.dev_st_date,'end_date':this.data.datresult.dev_end_date,'p_Camdevice_id':this.data.datresult.device_id,
        'p_IP_Address':this.data.datresult.ip_address,'user_id':this.data.datresult.user_id,'p_send_notification':this.data.datresult.send_notification})
      }
      this.groupCode = this.data.datresult.camera_type;
    }
  }
  // getuserData1(){
  //   this._streamService.getuserdetails().subscribe(response => {
  //     this.udata = response.gai_get_user_details;
  //    });
  // }
  selectedGroup(option){
    this.groupCode = option;
  }

  public _camtypefilter(value: string) : string[]  {
    const filterValue = value.toLowerCase();
    return this.devicelist.filter(option => option.toLowerCase().includes(filterValue));
  }
 
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Reset password
   */
  AddDevice(): void
  {
   
      // Return if the form is invalid
      if ( this.addDeviceForm.invalid )
      {
          return;
      }
     // Disable the form
      this.addDeviceForm.disable();
      // Hide the alert
      this.showAlert = false;
      var devobj = this.addDeviceForm.value;
      devobj.p_username = localStorage.getItem('userName');
      devobj.p_device_type='';
      devobj.p_device_token='';
      devobj.p_logindevice_id ='';
   //   devobj.p_Camdevice_id =11;
      // Send the request to the server
      if(confirm('Are your sure you want continue?')){
        //this.addUserForm.enable();
        this._userService.addDevice(devobj).subscribe((dt:any)=>{
            if(dt.gai_ins_user_device.errorCode == 0){
             
            this._router.onSameUrlNavigation = 'reload';
            this._router.navigate(['../../user']);
              //call api to generate folders in edge unit 
              // this._streamService.createFolder(this.cfurl).subscribe((cf:any)=>{
              //   if(cf.err_code == 200){
              //     this.message ='Sync with Edge unit completed!';
              //     this.display(this.message)
              //     this._streamService.createHls(this.cfurl);
              //    }else{
              //     this.message ='Failed to sync with edge unit, Please check';
              //     this.display(this.message)
              //    }
              // })
              this.message ='User Device Added successfully!, Trying to Sync with Edge unit. Please Wait!';
              this.display(this.message)
              // setTimeout(() => {
              //   this.ngOnInit();
              //   let currentUrl = this._router.url;
              //   this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
              //   this._router.navigate([currentUrl]);
              //   });
              //   }, 1500);
              this.dialogRef.close({});
              
            }else {
              this.display(dt.gai_ins_user_device.message)
            }
           })
          }else {
            this.addDeviceForm.enable();
          }
  }
  display(msg){
    this._snackBar.open(msg, 'OK', { duration: 2000,verticalPosition: 'top',
    horizontalPosition: 'center' });
  }

}
export interface DialogData {
  datresult: any;
  editMode:string;
  udata:any;
}
