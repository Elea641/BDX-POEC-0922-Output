import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent implements OnInit {

newOnomatopia: string = "";
@Output() public sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  createOnomatopia(){
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }
}
