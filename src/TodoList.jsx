import { useState } from "react";
import TodoTable from "./TodoTable";

import "./index.css";


function TodoList() {
    
    const [desc, setDesc] = useState("");
    const [todos, setTodos] = useState([]);
    const [date, setDate] = useState("")

const handleDescChange = (event) => {
    setDesc(event.target.value);
};

const handleDateChange = (event) => {
    setDate(event.target.value);
};

const addTodos = () => {
    setTodos([...todos, {description:desc, Date:date}]);
    setDate("");
    setDesc("");    
};

const deleteTodos = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
};

return (
    <div>
        <TodoTable
            desc={desc}
            date={date}
            todos={todos}
            handleDescChange={handleDescChange}
            handleDateChange={handleDateChange}
            addTodos={addTodos}
            deleteTodos={deleteTodos}
        />
    </div>
);
   
}

export default TodoList;