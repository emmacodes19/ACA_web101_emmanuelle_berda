// Array//
var todos = [ 'item 1', 'item 2', 'item 3',]
consolge.log ( 'My Todos:', todos)

todos.push('item 4', 'item 5') // I added a new item to my todos //

todos [0] = 'item 1 updated' // I changed a specific item //

todos.splice (0, 1) // I deleted  item 1 (one time ) position starts at 0 //
todos.splice (3,1) //I deleted  item 5 (one time ), position is 3 because the computer start counting from 0 not 1 like humans //

//Function //

var todos [ 'item 1', 'item 2', 'item 3',]

function  displayTodos () {
    console.log('My todos:' todos); // Here the function tells that you will display this var toDos I created before //

}

function addTodos (todo) {
    todos.push (todo); // Here I am adding a new todo my my list //
    displayTodos ();
}

addTodos() // It will show me the new item and the whole list //
 
addTodo ('some stuff') // "some stuff" witll be added to the todo list"//
displayTodos ()

function changeTodos (position, newValue) {
    todos [position] = newValue;
    displayTodos ();
}

changeTodo (0, "changed") // here I changed item 1 with 'changed' //
changeTodo (0, 'changed again')

function deleteTodos ( position) { // here I only to add a parameter named "poistion"//
    todos.splice (position,1);
    displayTodos ();
}
deleteTodos (0,1);

deleteTodos (2,1); // here I deleted item # 3// 


//Object//
var myComputer = {
    operatingSystem: 'mac',
    screenSize: '13 inches',
    purchaseYear: 2014,
};

var emma = {
    name: 'Emma',
    sayName: function sayName() {
        console.log (this.name);
    }
}

//Object with ToDo //

 var todoList = {
todos: [ ],
 displayTodos: function() {
 console.log ('My todos:', this.todos);
 },

 addTodo: function(todoText) {
     this.todos.push( {
         todoText: todoText,
         completed: false
     });
     this.displayTodos();
 }

 };

 todoList.addTodo('plunker');

 changeTodo: function(position, todoText) {
this.todos [position].todoText = todoText;
this.displayTodos();
 }

 deleteTodo : function (position) {
     this.todos.splice (position, 1);
     this.displayTodos ();
 }

 {
     todoText: 'item1'
     completed: false

 }

 toogleCompleted: function(position) {
     var todo = this.todos[position];
     todo.completed = !todo.completed;
     this.displayTodos();
 }
