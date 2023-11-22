import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { ReadstoryComponent } from './readstory/readstory.component';
import {SendmailComponent} from './sendmail/sendmail.component'

const routes: Routes = [
  {
		path: '',
		children: [
			{
				path: '',
				component: ReadstoryComponent
			},
			{
				path: 'dashboard', 
				// path: 'mapp/dashboard',
				component: DashboardComponent
			},
			{
				path: 'about',
				component: AboutComponent
			},
			{
				path: '404',
				component: ErrorComponent
			},
			{
				path: 'adminlogin',
				component: AdminComponent
			},
			{
				path: 'sendmail', 
				component: SendmailComponent
			},
			{
				path: '**',
				redirectTo: '404'
			},
			
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
