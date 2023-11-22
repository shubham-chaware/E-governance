import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { stories } from '../dashboard/stories';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Editor } from 'ngx-editor';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  MyStories: stories[];
  editor: Editor;
  html: '';

  selectedProduct: stories = { id : null , description: null, Title: null}
  constructor(private apiService: ApiService,private route:ActivatedRoute,private router:Router) { }

  
  username = new FormControl('', [Validators.maxLength(5)]);
  password = new FormControl('', [Validators.required]);
  v_username=''
  v_password=''
  password_error=''
  username__error=''
  err_msg={u:this.username__error,p:this.password_error}

  getErrorMessage(rec1: any, rec2:any,form: any) {
    this.err_msg.u=''
    this.err_msg.p=''
    if (rec1=='') {
      this.err_msg.u= 'Enter Valid Story Name';
    }

    else if (rec2==''){
      this.err_msg.p= 'Please Enter Valid Description for story';
    }

    else{;
      console.log('crt')
      form.value.id = null
      form.value.Title = this.v_username;
		  form.value.description = this.v_password;
      console.log(form.value)
      this.apiService.createProduct(form.value).subscribe((product: stories)=>{
        console.log(product)
        this.router.navigate(['/'])
      });
      
    }
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
