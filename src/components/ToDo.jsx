/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faTrashCan,
  faPen,
} from '@fortawesome/free-solid-svg-icons';

const ToDo = (
  {
    todos,
    markTaskAsCompleted,
    setUpdateData,
    deleteTask,
  },
) => (
  <>
    {todos && todos
      .sort((a, b) => a.id - b.id)
      .map((todo, index) => (
        <React.Fragment key={todo.id}>
          <div className="col taskBg">
            <div className={todo.status ? 'done' : ''}>
              <span className="taskNumber">{index + 1}</span>
              <span className="taskText">{todo.title}</span>
            </div>
            <div className="iconsWrap">
              <span
                title="Completed/Not Completed"
                onClick={() => markTaskAsCompleted(todo.id)}
              >
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              {todo.status ? null : (
                <span
                  title="Edit"
                  onClick={() => setUpdateData({
                    id: todo.id,
                    title: todo.title,
                    status: todo.status ? todo.status : false,
                  })}
                >
                  <FontAwesomeIcon icon={faPen} />
                </span>
              )}
              <span title="Delete" onClick={() => deleteTask(todo.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
          </div>
        </React.Fragment>
      ))}
  </>
);

ToDo.propTypes = {
  todos: PropTypes.array.isRequired,
  markTaskAsCompleted: PropTypes.func.isRequired,
  setUpdateData: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default ToDo;
