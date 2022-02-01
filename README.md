Nested inside of the App component is the Todos component, which has the Todo and AddTodo component nested within it. 

In the Todos component, an initial state of empty strings and an empty array is set to addTodoValue and todos, with both states being changed in various parts of the Todos component, i.e. to get the input value from the app's form.

There are various functions in the component, all which changes the state depending on user action, i.e. deletion of item (the filter function checks if the id of todo is not equal to the todo task, in which case the state changes and returns the deletedTodos item), addition of item (if value is true, a copy of the original empty todos state is gotten using the spread operator, and information such as id which is generated as the time of input and value of the new to do item is added to the array which is then passed in the changed state. If value is false, user is prompted to add text via the console), etc. 

The functions and data held in the various states are then used to render data in the app, by passing them as props in nested components, i.e. Todo, etc...
