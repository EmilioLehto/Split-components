import React from "react";

function TodoTable(props) {
return(
    <>
    <div>
    <label style={{marginRight: "10px"}}>Description:</label>
    <input placeholder="Description" onChange={handleDescChange} value={desc} />
    </div>
    
    <div>
    <label style={{marginRight: "60px"}}>Date:</label>
    <input placeholder="Date" onChange={handleDateChange} value={date} />
    </div>

    <button onClick={addTodos} style={{marginTop:"20px"}}>Add</button>
    <div className="table-contain">
    <table style={{width: "100%"}}>
        <tbody>
            <tr style={{border: "1px solid"}}>
                <th>Description</th>
                <th>Date</th>
                <th>Delete</th>
            </tr>
            {todos.map((todo, index) => (
                <tr key={index}>
                    <td>{todo.description}</td>
                    <td>{todo.Date}</td>    
                   <td> <button onClick={() => deleteTodos(index)}>Delete</button>
                   </td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
    </>
);
}


export default TodoTable;