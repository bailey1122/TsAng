import { Component, Input, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  // user: any;
  // @Input('user') userObj: User;
  @Input('user') user: User;
  // @Input('name') userName: string;
  isCollapsed : boolean = true;

  constructor() {
    // this.user = {
    //   name: 'Foo Bar',
    //   title: 'Software Developer',
    //   address: '1234 Main St, City, State, 100010',
    //   phone: [
    //     '123-123-1234',
    //     '456-456-4567'
    //   ]
    // };
   }

   toggleCollapse() {
     this.isCollapsed = !this.isCollapsed;
   }

  ngOnInit() {
    //     this.user = {
    //   // name: 'Foo Bar',
    //   name: this.user.name,
    //   title: this.user.designation,
    //   address: this.user.address,
    //   phone: this.user.phone
    // };

    //     this.user = {
    //   // name: 'Foo Bar',
    //   name: this.userName,
    //   title: 'Software Developer',
    //   address: '1234 Main St, City, State, 100010',
    //   phone: [
    //     '123-123-1234',
    //     '456-456-4567'
    //   ]
    // };
  }

}
