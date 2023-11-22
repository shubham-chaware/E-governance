import { Component, Inject,ElementRef  } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {Dialog,DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { stories } from './stories';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  is_delete: boolean;
  Story_Des:string;
  Story_Title:string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  MyStories: stories[];
 public delete_story=false
  constructor(public v_dialog: MatDialog,public dialog: Dialog,private apiService: ApiService,private router:Router) {
		this.apiService.readProducts().subscribe((MyStories: stories[])=>{
		this.MyStories = MyStories;
	}) 

  }

  openDialog(cmnd: any): void {
    const dialogRef = this.dialog.open<string>(CdkDialogDataExampleDialog, {
      width: '250px',
      data: {is_delete: cmnd},
    });
     dialogRef.disableClose=true
  }

  openVDialog(data_title: any,data_desc: any) {
   const dialogref2= this.v_dialog.open(DialogDataExampleDialog, {
      data: {
        Story_Des: data_desc,
        Story_Title:data_title
      },
    });
    dialogref2.disableClose=true
   
  }

  home(){
    this.router.navigate(['/'])
  }

}

// AdminPanel
@Component({
  selector: 'cdk-dialog-data-example-dialog',
  templateUrl: 'cdk-dialog-data-example-dialog.html',
  styleUrls: ['./cdk-dialog-data-example-dialog.scss'],
})
export class CdkDialogDataExampleDialog {
  constructor(private apiService: ApiService,public dialogRef: DialogRef<string>, @Inject(DIALOG_DATA) public data: DialogData,private route:ActivatedRoute,private router:Router) {}

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  v_username=''
  v_password=''
  password_error=''
  username__error=''
  err_msg={u:this.username__error,p:this.password_error}

  getErrorMessage(rec1: any, rec2:any,to_delete:any) {
    this.err_msg.u=''
    this.err_msg.p=''
    console.log(to_delete)
    if (rec1!='Admin') {
      this.err_msg.u= 'Invalid Username';
    }

    else if (rec2!='admin123'){
      this.err_msg.p= ' Incorrect Password';
    }

    else if (to_delete!='TempCall'){
      to_delete=parseInt(to_delete)
      console.log(typeof(to_delete))
      this.apiService.deleteProduct(to_delete).subscribe((product: stories)=>{
      });
     
      
      this.dialogRef.close()
      // location.reload();
      this.router.navigate([''])
    }

    else{
      this.dialogRef.close()
      this.router.navigate(['/adminlogin'])
    }
  }
}


// View More

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public dialogref2: DialogRef<string>,private el: ElementRef) {}

  ngAfterViewChecked() {
    Array.from(this.el.nativeElement.querySelectorAll('a'))
      .forEach((el: any) => {
        el.setAttribute('target', '_blank');
      });
  }

}
