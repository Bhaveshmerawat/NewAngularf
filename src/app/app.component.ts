import { Component } from '@angular/core';
import { UserdataService } from "./service/userdata.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-angular';

  // constructor(private user: UserdataService) {
  //   // this.user.getData().subscribe(data =>{
  //   //   console.warn(data)
  //   // })
  //  }

  ngOnInit(): void {
    // this.user.getData();
    // console.log('getData')
  }
}
