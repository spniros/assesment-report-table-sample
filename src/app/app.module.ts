import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FulllayoutComponent } from './layout/fulllayout/fulllayout.component';
import { PagelayoutComponent } from './layout/pagelayout/pagelayout.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarksColorDirective } from './directive/marks-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    FulllayoutComponent,
    PagelayoutComponent,
    // MarksColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
