import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  username: string = ''

  ngOnInit(): void {
      const username = sessionStorage.getItem("username")
      if(username){
        this.username = username;
      }
  }
}
