import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Editor, Validators } from 'ngx-editor';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.scss']
})
export class SendmailComponent implements OnInit {
  editor: Editor;
  html: '';
  name:'';
  number:Number;
  file_data:any=''
  getFile=''
  _result:Number=9
  _mailSent=''


  constructor(private apiService: ApiService,private router:Router,private httpClient: HttpClient) { }

  complainttxt = new FormControl('',[Validators.maxLength(500)]);
  complaintsub = new FormControl('', [Validators.maxLength(50),Validators.required()]);
  complaintmb = new FormControl('', [Validators.required()]);
  file=new FormControl('')
  filename=new FormControl('')
  ngOnInit(): void {
    this.editor = new Editor();

  }

  sendmail(_name: any,number:any,msgdata: any,fname: any){
    this._result=9
    var regx = /^[6-9]\d{9}$/ ;
    if(this.getFile!=''){
      fname.value.fileName=this.getFile
      this.apiService.uploadFile(this.file_data).subscribe((res)=>{
        this._result= res[Object.keys(res)[0]]
    });
    }

    if(this._result==0){
      alert('File Upload Error')
    }
    
    if(regx.test(number)==false){
      alert('Invalid Mobile Number')
    }

    if(regx.test(number)){
      this._mailSent=''
      fname.value.Title = _name;
      fname.value.complaint = msgdata
      fname.value.Number = number;
      console.log(fname.value)
      
      this.apiService.performGetEx(fname.value).subscribe((res)=>{
       this._mailSent=JSON.stringify(res)
       console.log(JSON.stringify(res))
       if(this._mailSent=='"OK"'){
        alert('Complaint send to admin, Thank you !!')
       }
       else(
        alert('Something Went Wrong')
       )
      });

      } 
  }

  
  fileChange(event:any) {
    
    const fileList: FileList = event.target.files;
    //check whether file is selected or not
    if (fileList.length > 0) {

        const file = fileList[0];
        //get file information such as name, size and type
        console.log('finfo',file.name,file.size,file.type);
        this.getFile=file.name.split('.')[0]+file.name.split('.')[1]+'.'+file.name.split('.')[1]
        // console.log('name : '+this.getFile)
        //max file size is 4 mb
        if((file.size/1048576)<=4 && file.name.split('.')[1]=='jpg' || file.name.split('.')[1]=='png')
        {
          let formData = new FormData();
          let info={id:2,name:'raja'}
          formData.append('file', file, file.name);
          formData.append('id','2');
          formData.append('tz',new Date().toISOString())
          formData.append('update','2')
          formData.append('info',JSON.stringify(info))
          this.file_data=formData
        }else{
          alert('Only .jpg & .png files of less than 4MB are accepted')
        }
        
    }

  }
  
   // make sure to destory the editor
   ngOnDestroy(): void {
    this.editor.destroy();
    console.log('End')
  }

  

}
