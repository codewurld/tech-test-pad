
// props passed from Todos component
const Todo = ({ index, todo, fooDoneDone, fooDelete, isDone }) => {

    const renderTodo = () => {
        if (todo.isDone) {
            return <s>{todo.value}</s>;
        }

        return todo.value;
    }


    return (
        <div>
            <td style={{ width: 10 }} className="text-center">
                {index}
            </td>
            <td style={{ width: 15 }} className="text-center">
                <input type="checkbox" defaultChecked={todo.isDone} onChange={() => fooDoneDone(todo)} />
            </td>
            <td>
                {
                    renderTodo
                }
            </td>
            <td style={{ width: 100 }} className="text-center">
                <button onClick={() => fooDelete(todo.id)} className="btn btn-danger btn-sm">Delete</button>
            </td>
        </div>
    );
}

export default Todo;

