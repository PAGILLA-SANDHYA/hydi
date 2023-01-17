import { Component, OnInit } from '@angular/core';
import {of, from } from 'rxjs';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Rxjs9';
  ngOnInit() {
  // of(2,4,6,8).subscribe(item=> console.log(item));
  // from([20, 15,10, 5]).subscribe({
  //   next: (item) => console.log(`resulting item ..${item}`),
  //   error: (err) => console.error('error occured ${err}'),
  //   complete:() => console.log('complete'),
  // });
      //  of('Apple1','Apple2', 'Apple3') .subscribe{{
      //   next: (item) => console.log('resulting item..${item}'),
      //   error: (err) => console.error{'error occured ${err}'}
        
       }}
  
  
  




