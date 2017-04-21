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
  notDoneCount: number;

  addNewItem(event): void {
    if (event.key === "Enter") {
      this.newItem.id = ++idCounter;
      var newTemp: listItem = this.newItem;
      this.allItems.push(newTemp);
      this.newItem = new listItem;
      this.notDoneCount = getNotDone();
    };
  };

  deleteItem(id: number) {
    var location = ALLITEMS.findIndex(item => item.id == id);
    ALLITEMS.splice(location, 1);
    this.notDoneCount = getNotDone();
  };

  clearDone() {
    for (var item in this.allItems) {
      if (this.allItems[item].done === true) {
        var id = this.allItems[item].id;
        var location = this.allItems.findIndex(item => item.id == id);
        this.allItems.splice(location, 1);
      }
    }
  }

  toggleStatus(id: any) {
    var temp: listItem = ALLITEMS.find(item => item.id == id);
    temp.done = (temp.done === false) ? true : false;
    makeChange(id, temp.done);
    this.notDoneCount = getNotDone();
  };
}

const ALLITEMS: listItem[] = [];

var idCounter: number = 1;

export class listItem {
  id: number;
  title: string;
  done: boolean = false;
}


function makeChange(id, status: boolean) {
  var clicked = document.getElementById(id);
  clicked.style.textDecoration = (status === true) ? "line-through" : "none";
};

function getNotDone() {
  var notDone: number = 0;
  for (var item in ALLITEMS) {
    if (ALLITEMS[item].done === false) {
      notDone++;
    }
  }
  return notDone;
}











