import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'github',
  templateUrl: 'github.component.html',
  providers: [GithubService]
})
export class GithubComponent  {

repos:any;
user:any;
username:string;

    constructor(private _githubService:GithubService){
      console.log('Github component init...');
    }

    search(){
      this._githubService.updateUsername(this.username);

      this._githubService.getUser().subscribe(user=> {
        //console.log(user);
        this.user = user;
      });

      this._githubService.getRepos().subscribe(repos=> {
        this.repos = repos;
      });
    }
 }
