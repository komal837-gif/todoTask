import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from './models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

todoArr: Array<Itodo> = [
    {
      todoItem:"js",
      todoId:"123"
    },
    {
      todoItem:"css",
      todoId:"124"
    },
    {
      todoItem:"ts",
      todoId:"125"
    }
]



editId !: string;
isInEditMode: boolean = false
editId1 !: string;
isInEditMode1: boolean = false
editId2 !: string;
isInEditMode2: boolean = false
editId3 !: string;
isInEditMode3: boolean = false
@ViewChild('todoItem1') todoItem1!:ElementRef
@ViewChild('todoItem') todoItem!: ElementRef
@ViewChild('todoItem2') todoItem2!:ElementRef
@ViewChild('todoItem3') todoItem3!:ElementRef
  constructor(
    private _snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onTodoAdd(){
    if(this.todoItem.nativeElement.value.length > 0){
      let todoObj:Itodo={
        todoItem:this.todoItem.nativeElement.value,
        todoId:Date.now().toString()
      }
      this.todoItem.nativeElement.value = "";
      this.todoArr.push(todoObj)

      this._snackBar.open(`The todo with id ${todoObj.todoId} is added successfully!!!`,'Close',
        {
          horizontalPosition:'left',
          verticalPosition:'top',
          duration:3000
        })
    }
  }

  trackById(index:number,todo:Itodo){
    return todo.todoId;
  }

  onRemove(id:string){
    let getIndex = this.todoArr.findIndex(t=>t.todoId === id)
    this.todoArr.splice(getIndex,1)

    this._snackBar.open(`The todo with id ${id} is removed successfully!!!`,'click',
    {

      horizontalPosition:'left',
      verticalPosition:'top',
      duration:3000
    })
}
  onEditTodo(todo:Itodo){
    console.log(todo)
    this.editId = todo.todoId
    this.todoItem.nativeElement.value = todo.todoItem
    this.isInEditMode = true;
  }

  onUpdateTodo(){

    let UpdatedTodo: Itodo={
      todoItem:this.todoItem.nativeElement.value,
      todoId:this.editId
    }
    console.log(UpdatedTodo)
    this.todoItem.nativeElement.value = "";
    this._snackBar.open(`The todo item with id ${this.editId} is updated successfully!!!`,'click',
    {
      horizontalPosition:'left',
      verticalPosition:'top',
      duration:3000
    })

    let getIndex = this.todoArr.findIndex(t=>t.todoId === UpdatedTodo.todoId)
    this.todoArr[getIndex] = UpdatedTodo
    this.isInEditMode = false
  }

  onTodoAdd1(){
   if(this.todoItem1.nativeElement.value.length > 0){
      let todoObj1:Itodo ={
        todoItem:this.todoItem1.nativeElement.value,
        todoId:Date.now().toString()
      }
      console.log(todoObj1)
      this.todoItem1.nativeElement.value="";

      this.todoArr.push(todoObj1)

      this._snackBar.open(`The todoItem with is ${todoObj1.todoId} `,'Click',
        {
          horizontalPosition:"left",
          verticalPosition:"top",
          duration:3000
      })
    }

  }

  trackById1(Index:number,todo:Itodo){
    return todo.todoId;
  }

  onTodoRemove1(id:string){
    let getIndex = this.todoArr.findIndex(t=>t.todoId === id)
    this.todoArr.splice(getIndex,1)

    this._snackBar.open(`The todo item with id ${id} removed successfully!!!`,'click',
      {
        horizontalPosition:'left',
        verticalPosition:'top',
        duration:3000
      }
    )
  }

  onTodoEdit1(todo1:Itodo){

    this.todoItem1.nativeElement.value = todo1.todoItem;
    this.editId1 = todo1.todoId;
    this.isInEditMode1 = true
  }

  onTodoUpdate1(){
    let updatedObj:Itodo={
      todoItem: this.todoItem1.nativeElement.value,
      todoId: this.editId1
    }
    console.log(updatedObj)
    this.todoItem1.nativeElement.value = '';

    this._snackBar.open(`The todo item with id ${updatedObj.todoId} is updated successfully!!!`,'Click',
      {
        horizontalPosition:'left',
        verticalPosition:'top',
        duration:3000
      }
    )

    let getIndex = this.todoArr.findIndex(t=>t.todoId === updatedObj.todoId)
    this.todoArr[getIndex] = updatedObj;
    this.isInEditMode = false
   
  }


  onTodoAdd2(){
   if(this.todoItem2.nativeElement.value.length > 0){
     let todoObj:Itodo={
      todoItem:this.todoItem2.nativeElement.value,
      todoId: Date.now().toString()
    }
    console.log(todoObj)
    this.todoItem2.nativeElement.value="";
    this.todoArr.push(todoObj)

    this._snackBar.open(`The todo item with id ${todoObj.todoId} is added successfully!!!`,'Click',
      {
        horizontalPosition:'left',
        verticalPosition:'top',
        duration:3000
      }
    )
   }

  }

  trackById2(index:number,todo2:Itodo){
    return todo2.todoId;
  }

onTodoRemove2(id:string){

  let  getIndex = this.todoArr.findIndex(t=>t.todoId === id)
  this.todoArr.splice(getIndex,1)

  this._snackBar.open(`The todo item with id ${id} is removed successfully!!!`,'Click',
    {
      horizontalPosition:'left',
      verticalPosition:'top',
      duration:3000
    }
  )
}

onTodoEdit(todo:Itodo){

  this.todoItem2.nativeElement.value = todo.todoItem;
  this.editId2 = todo.todoId;
  this.isInEditMode2 = true;
}

onTodoUpdate2(){
  let updatedObj:Itodo ={
    todoItem:this.todoItem2.nativeElement.value,
    todoId:this.editId2
  }

  console.log(updatedObj)
  this.todoItem2.nativeElement.value ="";

  this._snackBar.open(`The todo item with id ${updatedObj.todoId} is updated successfully!!`,'Click',
    {
      horizontalPosition:'left',
      verticalPosition:'top',
      duration:3000
    }
  )

  let getIndex = this.todoArr.findIndex(t=>t.todoId === updatedObj.todoId)

  this.todoArr[getIndex] = updatedObj;
  this.isInEditMode2 = false
}

onTodoAdd3(){
  if(this.todoItem3.nativeElement.value.length > 0){
    let todoObj:Itodo ={
    todoItem:this.todoItem3.nativeElement.value,
    todoId:Date.now().toString()
    } 
    console.log(todoObj)

    this.todoItem3.nativeElement.value="";

    this.todoArr.push(todoObj)

    this._snackBar.open(`The todo item with id ${todoObj.todoId} is added successfully!!!`,'Click',
      {
        horizontalPosition:'left',
        verticalPosition:'top',
        duration:3000
      }
    )
    }
  }

  trackById3(index:number,todo3:Itodo){
    return todo3.todoId;
  }

  onTodoRemove3(id:string){
      let getIndex = this.todoArr.findIndex(t=>t.todoId === id)
      this.todoArr.splice(getIndex,1)

       this._snackBar.open(`The todo item with id ${id} is removed successfully!!!`,'Click',
        {
          horizontalPosition:'left',
          verticalPosition:'top',
          duration:3000
        }
       )
  }

  onTodoEdit3(todo3:Itodo){
    this.todoItem3.nativeElement.value = todo3.todoItem
    this.editId3 = todo3.todoId
    this.isInEditMode3 = true
  }

  onTodoUpdate(){
    let UpdatedObj:Itodo={
      todoItem:this.todoItem3.nativeElement.value,
      todoId:this.editId3
    }
    console.log(UpdatedObj)
    this.todoItem3.nativeElement.value="";

    let getIndex = this.todoArr.findIndex(t=>t.todoId === UpdatedObj.todoId)
    this.todoArr[getIndex] = UpdatedObj
    this.isInEditMode3= true

    this._snackBar.open(`The todo item with id ${UpdatedObj.todoId} updated successfully!!!`,'Click',{

        horizontalPosition:'left',
        verticalPosition:'top',
        duration:3000
      })
  }

  }
