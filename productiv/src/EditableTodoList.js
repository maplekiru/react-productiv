import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {

  const editableTodos = todos.map(todo => (
    <EditableTodo todo={todo} update={update} remove={remove} key={todo.id} />));

  return (
    <div>
      {editableTodos}
    </div>
  );
}

export default EditableTodoList;


//important to include key during any iteration so react knows how to identify each unique item