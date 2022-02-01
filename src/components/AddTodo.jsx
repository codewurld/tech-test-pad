import { useState } from "react";


// props passed from Todos component
const AddTodo = ({ addTodoValue, fooAddTodo }) => {


    const [defaultValue, setDefaultValue] = useState("")
    const [value, setValue] = useState(addTodoValue)

    // get input value from form
    const handleChange = (e) => {
        e.preventDefault();

        setValue(e.target.value);
    }

    // returns empty string
    const clearInput = () => {
        document.getElementById("todoValue").value = "";

        setValue("");
    }


    const addTodo = () => {

        setValue(fooAddTodo);

        clearInput();
    }

    return (
        <div className="input-group mb-3">
            {/* gets input value on change */}
            <input type="text" className="form-control" id="todoValue" placeholder="ToDo" onChange={handleChange} />
            <div className="input-group-append">
                <button onClick={addTodo} className="btn btn-outline-secondary" type="button" id="button-addon2">Add New ToDo</button>
            </div>
        </div>
    );
}

export default AddTodo;

