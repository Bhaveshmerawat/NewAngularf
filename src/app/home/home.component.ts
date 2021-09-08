import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserdataService } from "../service/userdata.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from "../model/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @Output() detailWasSelected = new EventEmitter<any>();
  //  @Output() detail = new EventEmitter<void>();
  // detailslist: any;
  // @Output() newDetail = new EventEmitter<any>();
  // detail: any[] = []
  // id: any;
  // data: any;
  // User: any;
  // constructor(private userdata: UserdataService, private route: ActivatedRoute) {
  //   this.detailslist = {};
  // }
  // collection: any;
  // userDetail: any;
  // selectedDetails = [];
  //collection: User[] = [];


  // <!-- case 1st direct bind the deta from child to parent -->
  // message="welcome to parent" // case 1

  //  case 2nd pass the data with the help of event
  // message: any
  // reciveMessage($event: any) {
  //   this.message = $event
  // }

  //  case 3nd pass the data with the help of event
  message: any
  reciveMessage($event: any) {
    this.message = $event
  }




  ngOnInit(): void {
    //  this.getUsersData();
    // this.userdata.getData().subscribe((result) => {
    //   // console.log(result)
    //   this.collection = result
    // })
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params.id;
    // });

    //  this.getUsers();
    // this.id = this.route.snapshot.params['id'];
    // this.GetSingleUser();
  }

  // GetSingleUser() {
  //   this.userdata.getOne(this.id).subscribe((data) => {
  //     console.log(data)
  //     this.data = data;
  //   })
  // }

  // getUsers(): void {
  //   this.userdata.getData()
  //     .subscribe(collection => this.User = collection);
  // }

  // getUsers(): void {
  //   debugger
  //   this.userdata.getData(this.id).subscribe( (collection) =>{
  //     console.log(collection)
  //    this.data = collection;
  //   });
  // }

  // getUsersData(): void {
  //   this.userdata.getData().subscribe((result) => {
  //     // console.log(result)
  //     this.collection = result;
  //   })
  // }

  // selectUser(detail: any) {
  //   console.log(detail);
  //   this.userDetail = detail;
  //   //    this.detailWasSelected.emit(detail);
  //   //  this.detailWasSelected.emit();
  //   // this.newDetail.emit(detail);
  // }

  // addItem(detail: any) {
  //   this.userDetail.push(detail);
  // }



}
