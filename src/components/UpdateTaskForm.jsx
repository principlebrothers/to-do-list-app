const UpdateTaskForm = ({ updateData, updateTask, cancelUpdate, changeTaskForUpdate }) => {
  return (
    <>
      {/* Update Task */}
      <div className="row">
        <div className="col">
          <input type="text" className="form-control form-control-lg" placeholder="Update task" value={updateData && updateData.title} onChange={(e) => changeTaskForUpdate(e)} />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success mr-20" type="button" onClick={updateTask}>Update</button>
          <button className="btn btn-lg btn-warning" type="button" onClick={cancelUpdate}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default UpdateTaskForm;