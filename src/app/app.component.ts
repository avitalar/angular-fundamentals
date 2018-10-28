import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private GitSearchService: GitSearchService) {

  }
  searchRepo() {
    this.GitSearchService.gitSearch('angular').then( (response) => {
      alert("Total Libraries Found:" + response.total_count);
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }
  searchUser() {
    this.GitSearchService.gitUsersSearch('avitalar').then( (response) => {
    //alert(JSON.stringify(response.items));
    alert("Total Users Found:" + response.total_count);

    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }
  title = 'app is functional!';
}
