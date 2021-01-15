import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { InformationComponent } from './information/information.component';
import { HttpClientModule } from '@angular/common/http';
import { GroupPipe } from './pipes/group.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { WorkersfilterPipe } from './pipes/workersfilter.pipe';
import { AddworkersComponent } from './addworkers/addworkers.component';
import { GroupComponent } from './group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroupComponent,
    InformationComponent,
    GroupPipe,
    SortByPipe,
    WorkersfilterPipe,
    AddworkersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
