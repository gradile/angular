import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 home: string = 'Home';
 bio: string = 'Biography';
  constructor() {
   
   }

  ngOnInit() {
  }

}
