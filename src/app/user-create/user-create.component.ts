import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserdataService } from "../service/userdata.service";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  // <!-- case 1st direct bind the deta from child to parent -->
  // @Input() data:string | undefined; // for case 1

  //  case 2nd pass the data with the help of event
  // message="hello data from child component" // 2nd case
  // 3rd case
  message = "hay! it is service child deta "
  @Output() event = new EventEmitter<any>()
  constructor(private userdata: UserdataService) { }

  ngOnInit(): void {
    // 3rd case
    this.userdata.setMessage(this.message);

  }

  //  case 2nd pass the data with the help of event
  sendMessage() {
    console.log(this.message)
    this.event.emit(this.message)
  }

  // case 3rd passing data with service its called sibling component

}
