import { Component, OnInit, OnChanges } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GitSearchComponent } from './git-search/git-search.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private GitSearchService: GitSearchService) {

  }

  ngOnInit() {

  }
  
  
  title = 'app is functional!';
}
