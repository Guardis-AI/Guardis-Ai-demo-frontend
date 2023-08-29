import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, Inject, ViewChild} from '@angular/core';
import { UserComponent } from '../user.component';
import { FormBuilder, NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { FuseValidators } from '@fuse/validators';
import { FuseAlertType } from '@fuse/components/alert';
import { UserService } from 'app/services/user.service';
import {formatDate} from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class DetailsComponent implements OnInit {
    addUserForm: UntypedFormGroup;
    message ='';
    title = 'Add User';
    role:any;
    @ViewChild(UserComponent) ul :UserComponent;
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,

    private _userService: UserService,
    private _formBuilder: UntypedFormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
   
  ) { }
 

  submit(form: NgForm) {
    this.dialogRef.close({
      clicked: 'submit',
      form: form,
    });
  }
  @ViewChild('addUserNgForm') addUserNgForm: NgForm;

  alert: { type: FuseAlertType; message: string } = {
      type   : 'success',
      message: ''
  };
 
 

  /**
   * On init
   */
  ngOnInit(): void
  {
    this._userService.getRole().subscribe(response => {
      this.role = response.get_user_role.role;
     })
    
      // Create the form
      this.addUserForm = this._formBuilder.group({
        user_id : [''],
        username: ['', Validators.required],
        start_date: [new  Date(), Validators.required],
        end_date :[''],
        cfurl : ['', Validators.required],
        p_edgeunit : ['', Validators.required],
        urole :['',Validators.required],
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required],
          },
          {
              validators: FuseValidators.mustMatch('password', 'passwordConfirm')
          }
      );
      if(this.data.editMode=='Y'){
        this.title = 'Edit User';
        if(this.data.datresult!=''){
          this.addUserForm.patchValue({'username' : this.data.datresult.user_name,'password':this.data.datresult.passwd,'passwordConfirm':this.data.datresult.passwd,user_id:this.data.datresult.user_id,
          'start_date':this.data.datresult.user_st_date,'end_date':this.data.datresult.user_end_date,'cfurl':this.data.datresult.cf_url,'p_edgeunit':this.data.datresult.edgeunit,'urole':this.data.datresult.role});
        }
      }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

 
  SaveUser(): void
  {
   
    // setTimeout(() => {
    //    // this.ngOnInit();
    //     this._router.navigate(['user'], { relativeTo: this._activatedRoute })
    //   }, 1500);
      // Return if the form is invalid
      if ( this.addUserForm.invalid )
      {
          return;
      }
     // Disable the form
      this.addUserForm.disable();
      var userobj = this.addUserForm.value;
      
      userobj.login_user_id = localStorage.getItem('userId');
      //userobj.start_date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
      //userobj.end_date = '';
      userobj.p_device_type='';
      userobj.p_device_token ='';
      userobj.p_device_id = '';
      console.log(userobj);
      
     // userobj.user_id =13;
      // Send the request to the server
      if(confirm('Are your sure you want continue?')){
        //this.addUserForm.enable();
        this._userService.addUser(userobj).subscribe((dt:any)=>{
            if(dt.gai_ins_user.errorCode == 0){
              this.message =(this.data.editMode == 'Y') ? 'Updated Successfully!' : 'User Registration Completed !!';
              this.onError(dt.gai_ins_user.message)
              setTimeout(() => {
                let currentUrl = this._router.url;
                this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                this._router.navigate([currentUrl]);
                })
              }, 1500);
              this.dialogRef.close({});
              
            }else {
              this.onError(dt.gai_ins_user.message)
            }
           })
          }
    
  }

  onError(msg){
    this._snackBar.open(msg, 'OK', { duration: 2000,verticalPosition: 'top',
    horizontalPosition: 'center' });
  }

  
}
export interface DialogData {
  datresult: any;
  editMode:string;
}
