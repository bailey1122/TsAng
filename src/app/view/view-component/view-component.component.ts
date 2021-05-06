import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  userName: string = "";
  response: any;

  constructor(private http: HttpClient) {
  }

  // constructor(private svc: TestService) {
  //   svc.printToConsole("From inner module / component")
  //  }

  ngOnInit(): void {
  }

  search() {
     this.http.get('https://api.github.com/users/' + this.userName)
     .subscribe((response) => {
       this.response = response;
       console.log(this.response)
     })
  }

}
