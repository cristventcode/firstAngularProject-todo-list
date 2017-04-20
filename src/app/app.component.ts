import { Component } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "To-do List";
  allItems = ALLITEMS;
  newItem = new listItem;
  listCount = ALLITEMS.length;

  addNewItem(event): void {
    if (event.key === "Enter") {
      this.newItem.id = ++idCounter;
      var newTemp: listItem = this.newItem;
      this.allItems.push(newTemp);
      this.newItem = new listItem;
      this.listCount++;
    };
  };

  deleteItem(id: number) {
    var location = ALLITEMS.findIndex(item => item.id == id);
    ALLITEMS.splice(location, 1);
    this.listCount--;
  };


  toggleStatus(element, id) {
    var temp: listItem = ALLITEMS.find(item => item.id == id);
    temp.done = (temp.done === false) ? true : false;
    console.log(temp);
  }
}

const ALLITEMS: listItem[] = [
  { id: 1, title: "Study for my final exam", done: false },
];

var idCounter: number = 1;

export class listItem {
  id: number;
  title: string;
  done: boolean = false;
}









