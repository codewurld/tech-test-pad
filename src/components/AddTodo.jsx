import { useState } from "react";


// props passed from Todos component
const AddTodo = ({ addNewTodo, }) => {



    const [value, setValue] = useState("")

    // get input value from form
    const handleChange = (e) => {
        e.preventDefault();

        setValue(e.target.value);
    }

    // returns empty string
    const clearInput = () => {

        setValue("");
    }


    const addTodo = () => {

        addNewTodo(value);

        clearInput();
    }

    return (
        <div className="input-group mb-3">
            {/* gets input value on change */}
            <input type="text" className="form-control" id="todoValue"
                value={value}
                placeholder="ToDo" onChange={handleChange} />
            <div className="input-group-append">
                <button onClick={addTodo} className="btn btn-outline-secondary" type="button" id="button-addon2">Add New ToDo</button>
            </div>
        </div>
    );
}

export default AddTodo;

