import { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const Todos = ({ todo }) => {

    // sets initial state for to do value

    const [todos, setTodos] = useState([])

    // gets current time
    const getTime = () => {
        let today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return time;
    }

    // delete when todo id is not equal to todo prop
    const handleDelete = todo => {
        const deletedTodos = todos.filter(t => t.id !== todo);

        setTodos(deletedTodos);
    }

    const handleDone = todo => {
        // array copy of todos prop
        const completedTodos = [...todos];

        completedTodos.map(t => {
            if (t.id === todo.id) {
                t.isDone = !t.isDone;
            }

            return t;
        });

        setTodos(completedTodos);
    }

    // gets value from user input with time of input as id
    const addNewTodo = (value) => {
        console.log(value);
        if (value) {
            const todosCopy = [...todos];
            todosCopy.push(
                {
                    id: getTime(),
                    value: value,
                    isDone: false
                }
            );

            setTodos(todosCopy)
        } else {
            console.log("Please Add Todo Text");
        }
    }



    return (
        <div>
            <table className="table">
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={todo.id}>
                            <Todo index={index + 1} todo={todo} fooDelete={handleDelete} fooDoneDone={handleDone} />
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="4" className="text-center">
                            <AddTodo addNewTodo={addNewTodo} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Todos;


