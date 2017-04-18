import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "To-do List";
  allItems = ALLITEMS;
  newItem = new listItem;

  addNewItem(): void {
    this.newItem.id = ++idCounter;
    var newTemp: listItem = this.newItem;
    this.allItems.push(newTemp);
    this.newItem = new listItem;
  };

  deleteItem(id: number){
    var location = ALLITEMS.findIndex(item => item.id == id);
    ALLITEMS.splice(location,1);
  }
}

var idCounter: number = 1;

export class listItem {
  id: number;
  title: string;
}

const ALLITEMS: listItem[] = [
  { id: 1, title: "Study for my final exam" },
];



