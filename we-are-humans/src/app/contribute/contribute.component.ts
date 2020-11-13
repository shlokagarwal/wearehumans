import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Inject } from '@angular/core';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss']
})
export class ContributeComponent implements OnInit {

  panelOpenState = false;
  constructor(public dialog: MatDialog) { }

  openDialog(userType) {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      height: '450px',
      width: '600px',
      data: { userType }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {
    // this.openDialog('donor');
  }


  openGithub(): void {
    window.open('https://github.com/shlokagarwal/wearehumans');
  }

}

@Component({
  selector: 'app-login-dialog',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss']
})
export class LoginDialogComponent implements OnInit {

  ngOnInit(): void {
   this.loginSelected = 1;
   console.log(this.data);
  }

  getTitle(){
    if(this.loginSelected == 1){
      return 'Login';
    }
    else{
      return 'Register';
    }
  }

  registerSelected(){
    this.loginSelected = 0;
  }

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  // select 0 for register
  loginSelected = 1;
  selectedTabIndex = 0;
  donoremail: string = '';
  donorpassword: string = '';
  ngoemail: string = '';
  ngopassword: string = '';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(30)
  ]);

  matcher = new MyErrorStateMatcher();

}
