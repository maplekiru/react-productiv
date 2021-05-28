import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 * 
 * State:
 * - edit
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {

  const { id, title, description, priority } = todo;
  const [edit, setEdit] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setEdit(edit => !edit);
  }

  /** Call remove fn passed to this. */
  function handleDelete(evt) {
    evt.preventDefault();
    remove(id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    toggleEdit();
    update({ ...formData, id });
  }

  const initialFormData = {
    title,
    description,
    priority
  };

  return (
    <div className="EditableTodo">

      {edit && <TodoForm
        initialFormData={initialFormData}
        handleSave={handleSave} />}

      {!edit &&
        <div className="mb-3">
          <div className="float-right text-sm-right">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
                        </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
                        </button>
          </div>
          <Todo id={id}
            title={title}
            description={description}
            priority={priority} />
        </div>
      }
    </div>
  );
}

export default EditableTodo;
