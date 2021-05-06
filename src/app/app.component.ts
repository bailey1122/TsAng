import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'test-project';

  user: User;
  inputText: string = "Initial value";

  constructor(private svc: TestService, private http: HttpClient) {
    this.svc.printToConsole("Got the service!")


    this.user = new User();
    this.user.name = 'Foo Bar';
    this.user.title = 'Software Developer';
    this.user.address = '1234 Main St, City, State, 100010';
    this.user.phone = [
      '123-123-1234'
    ];
  }

  ngOnInit() {
    let obs = this.http.get('https://github.com/bailey1122') // get an Observable not a result
    // obs.subscribe(() => console.log('Got the response'));
    obs.subscribe((response) => console.log(response));
  }
}
