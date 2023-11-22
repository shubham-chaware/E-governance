import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-readstory',
  templateUrl: './readstory.component.html',
  styleUrls: ['./readstory.component.scss']
})
export class ReadstoryComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  callDashboard(){
    this.router.navigate(['/dashboard'])
  }
  
  ngOnInit(): void {
  }

}
