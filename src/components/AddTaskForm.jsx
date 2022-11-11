import PropTypes from 'prop-types';

const AddTaskForm = ({ addTask, setNewTask, newTask }) => (
  <>
    {/* Add Task */}
    <div className="row">
      <div className="col">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Add new task"
          aria-label="Add new task"
          aria-describedby="button-addon2"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <div className="col-auto">
        <button
          className="btn btn-lg btn-success"
          type="button"
          id="button-addon2"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
    </div>
  </>
);

AddTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  setNewTask: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};

export default AddTaskForm;
