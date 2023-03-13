import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  message:string;
  subscription: Subscription;

  constructor(private data: DataTransferService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
