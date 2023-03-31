import React, { useState } from 'react';
import {useRef} from 'react';
function TodoList() {
    
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [completedTasks, setcompletedTasks] = useState([])
  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const handleDeletecomp = (index) => {
    const newTasks = [...completedTasks];
    newTasks.splice(index, 1);
    setcompletedTasks(newTasks);
  };

  const handleComplete = (index) => {
      const newTasks = [...tasks];
    //   console.log(newTasks)
    //   setcompTask(`✓ ${newTasks[index]}`)
    //   if(newTasks[index]!==`✓ ${newTasks[index]}`){
    //     newTasks[index] = `✓ ${newTasks[index]}`;
    //   }
      setcompletedTasks([...completedTasks, newTasks[index]])
      handleDelete(index)
  };

  const handleEdit = (index) => {
    if(newTask.length===0){
      const newTasks = [...tasks];
      setNewTask(newTasks[index]);
      setTasks(newTasks);
      handleDelete(index);
      ref.current.focus();
    }
  };

  return (<>
    <div className="h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
    <div className='absolute top-20 left-1/2 bg-blue-300 items-center min-h-fit w-96 pb-4 rounded-md shadow-2xl'>
        <h1 className='text-3xl py-3 font-bold'>To Do List</h1>
      <form  className='relative top-2' onSubmit={handleSubmit}>
        <input
        ref={ref}
        className='pl-2 mr-2'
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task" required
        />
        <button className='border-2 w-20 rounded-md hover:bg-green-500 hover:text-white shadow-md active:shadow-none' type="submit">Add</button>
      </form>
      <ul className='mt-10'>
        {tasks.map((task, index) => (
          <li className='relative w-96 min-h-fit mb-2' key={index}>
            <div className='flex'>
            <div className='absolute left-4 top-1 h-4 w-4 bg-white' onClick={() => handleComplete(index)} ></div>
            <div className='text-center w-56 text-lg font-semibold'>
              {task}       
            </div>
            <button className='ml-4 border-2 w-14 rounded-md hover:bg-red-500 hover:text-white absolute right-4 shadow-md active:shadow-none' type="submit" onClick={() => handleDelete(index)}>Delete</button>
            <button className='border-2 w-14 rounded-md hover:bg-blue-500 hover:text-white absolute right-24 shadow-md active:shadow-none' type="submit" onClick={() => handleEdit(index)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className='absolute left-40 top-20 pb-3 bg-green-300 items-center max-h-fit w-96 rounded-md shadow-2xl'>
    <h1 className='text-3xl my-3 pb-12 font-bold'>Completed Tasks</h1>
    <br />
    <ul>
        {completedTasks.map((task, index) => (
          <li className='relative w-96 min-h-fit mb-2' key={index}>
             <div className='flex'>
             <div className='absolute left-4 top-1 h-4 w-4 text-white font-extrabold'>✓</div>
             <div className='text-center w-56 text-lg font-semibold'>
              {task}       
             </div>     
            <button className='ml-4 border-2 w-14 rounded-md hover:bg-red-500 hover:text-white absolute right-6 shadow-md active:shadow-none' type="submit" onClick={() => handleDeletecomp(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
}

export default TodoList;
