import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskformComponent } from './taskform/taskform.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { TaskeditformComponent } from './taskeditform/taskeditform.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskformComponent,
    TaskeditformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    TaskeditformComponent,
    TaskformComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
