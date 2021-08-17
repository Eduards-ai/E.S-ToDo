import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/Todo';;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  inputTodo: string = '';


  constructor() { }

  ngOnInit(): void {}

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i ) => i !== id);
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed

      return v;
    })
  }

  addTodo() {
    this.todos.push({
      text: this.inputTodo,
      completed: false
    })
    this.inputTodo ='';
  }


}
