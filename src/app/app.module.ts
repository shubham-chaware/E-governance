import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent,CdkDialogDataExampleDialog } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';
import {DialogModule} from '@angular/cdk/dialog';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ReadstoryComponent } from './readstory/readstory.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxEditorModule } from 'ngx-editor';
import { SendmailComponent } from './sendmail/sendmail.component';
// import { EllipsisAngularModule } from 'ellipsis-angular';

// import {CdkDialogDataExample, CdkDialogDataExampleDialog} from './dashboard/';

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent,
    DashboardComponent,
    AboutComponent,
    ErrorComponent,
    AdminComponent,
    CdkDialogDataExampleDialog,
    ReadstoryComponent,
    SendmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    DialogModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    NgxEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
