import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "To-do List";
  allItems: listItem[] = [];
  newItem = new listItem;
  notDoneCount: number;

  addNewItem(event): void {
    if (event.key === "Enter") {
      this.newItem.id = ++idCounter;
      var newTemp: listItem = this.newItem;
      this.allItems.push(newTemp);
      this.newItem = new listItem;
      this.notDoneCount = getNotDone(this.allItems);
    };
  };

  deleteItem(id: number) {
    var location = this.allItems.findIndex(item => item.id == id);
    this.allItems.splice(location, 1);
    this.notDoneCount = getNotDone(this.allItems);
  };

  clearDone() {
    let newList: listItem[] = [];
    this.allItems.forEach(element => {
      if (element.done === false) {
        newList.push(element);
      }
    });
    this.allItems = newList;
    this.notDoneCount = getNotDone(this.allItems);
  }

  toggleStatus(id: any) {
    var temp: listItem = this.allItems.find(item => item.id == id);
    temp.done = (temp.done === false) ? true : false;
    makeChange(id, temp.done);
    this.notDoneCount = getNotDone(this.allItems);
  };
}

var idCounter: number = 0;

export class listItem {
  id: number;
  title: string;
  done: boolean = false;
}

function makeChange(id, status: boolean) {
  var clicked = document.getElementById(id);
  clicked.style.textDecoration = (status === true) ? "line-through" : "none";
};

function getNotDone(list) {
  var notDone: number = 0;
  list.forEach(element => {
    if (element.done === false) {
      notDone++;
    }
  });
  return notDone;
}











