import { Component } from '@angular/core';

@Component({
selector: 'app-project',
templateUrl: './app.project.html',
styleUrls: [
        '../assets/css/bootstrap.min.css'
    ]
})

export class ProjectComponent {
  task: string;
  tasks = [];

  onClick() {
this.tasks.push({name: this.task, strike: false});
this.task = '';
  }

}
