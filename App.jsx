import { SafeAreaView } from 'react-native';
import ToDoForm from './ToDoForm';
import React, { useState } from 'react';
import ToDoList from './ToDoList';


function App() {
  const [tasks, setTasks] = useState([
    { text: 'Do laundry', completed: true },
    { text: 'Go to gym', completed: false },
    { text: 'Walk dog', completed: true }
  ]);

  const addTask = (taskText) => {
    if (tasks.find(task => task.text === taskText)) return; 

    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}



export default App;
