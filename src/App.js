import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import AddTaskForm from './components/AddTaskForm';
import UpdateTaskForm from './components/UpdateTaskForm';
import ToDo from './components/ToDo';
import logo512 from './assets/logo512.png';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Temporary state
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Retrieve todos from local storage
  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  // Store todos on local storage
  const storeTodos = (newInput) => {
    localStorage.setItem('todos', JSON.stringify(newInput));
  };

  // Add Task
  const addTask = () => {
    if (newTask) {
      const newTodo = {
        id: todos.length + 1,
        title: newTask,
        status: false,
      };
      const mergedNewTodo = [...todos, newTodo];
      setTodos(mergedNewTodo);
      setNewTask('');
      storeTodos(mergedNewTodo);
    }
  };

  // Delete Task
  const deleteTask = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    storeTodos(newTodos);
  };

  // Mark task as completed
  const markTaskAsCompleted = (id) => {
    const newTask = todos.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTodos(newTask);
    storeTodos(newTask);
  };

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData('');
  };

  // Change task for update
  const changeTaskForUpdate = (e) => {
    const newTask = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? updateData.status : false,
    };
    setUpdateData(newTask);
  };

  // Update task
  const updateTask = () => {
    const filteredTask = [...todos].filter((task) => task.id !== updateData.id);
    const mergedUpdateTake = [...filteredTask, updateData];
    setTodos(mergedUpdateTake);
    storeTodos(mergedUpdateTake);
    setUpdateData('');
  };

  // Drag and drop
  const onDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  };


  /// ///////////////////////////////////////
  return (
    <div className="container App">
      <br />
      <header className="App-header">
        <img src={logo512} className="App-logo" alt="logo" width={76} />
        <h1>Daily To do List App (React JS)</h1>
      </header>
      <br />

      {updateData && updateData ? (
        <UpdateTaskForm
          updateData={updateData}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
          changeTaskForUpdate={changeTaskForUpdate}
        />
      ) : (
        <AddTaskForm
          addTask={addTask}
          newTask={newTask}
          setNewTask={setNewTask}
        />
      )}
      <br />

      {/* Display to do list here */}
      {todos && todos.length ? '' : 'No tasks...'}
      <ToDo
        todos={todos}
        markTaskAsCompleted={markTaskAsCompleted}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
