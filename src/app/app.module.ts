import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './Bar/sidebar/sidebar.component';
import { HeaderComponent } from './Header/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import{MatAutocompleteModule} from '@angular/material/autocomplete'
import { MatFormFieldModule } from '@angular/material/form-field';
import { RecommendationService } from './recommendation.service';
import { HttpClientModule } from '@angular/common/http';
import { DataFilterPipe } from './datafilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RecommendationComponent,
    SidebarComponent,
    HeaderComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, Ng2SearchPipeModule,FormsModule, ReactiveFormsModule,BrowserAnimationsModule,MatInputModule,MatAutocompleteModule,MatFormFieldModule
  ],
  providers: [HttpClientModule, RecommendationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
