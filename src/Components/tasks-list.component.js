import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './task.component.js';
import EditTask from './edit-task.component.js';

const TasksList = (props) => {

    const [inEditMode, setInEditMode] = useState({
      status: true,
      rowKey: null
    });

    const editModeChange = (currentMode, currentRowKey) => {
      setInEditMode({status: currentMode, rowKey: currentRowKey})
    }

    const deleteTask = (id) => {
          axios.delete('/tasks/'+id)
            .then(res => console.log(res.data));
          props.setTasks({tasks: props.tasks.tasks.filter(el => el._id !== id)})
        }

    const theList = () => {
        return props.tasks.tasks.map(currenttask => {
          const dt2 = new Date(currenttask.date);
          const d2F = new Date(dt2.toDateString())
          //console.log('d2F ', d2F)
          const dt1 = new Date();
          //console.log('dt1 ', dt1)
          const d1F = new Date(dt1.toDateString())
          //console.log('d1F ', d1F)
          let distance = Math.floor((d2F - d1F)) / (1000 * 60 * 60 * 24);
          //console.log('Math.floor(d2F-d1F) ', Math.floor((d2F - d1F)))
          // console.log('distance ', distance)
          if (distance == 1) { distance = '1 day until'}
          else if (distance > 1) { distance = Math.ceil(distance) + ' days until'}
          else if (distance == -1) { distance = '1 day ago'}
          else if (distance < -1) { distance = Math.ceil(Math.abs(distance)) + ' days ago'}
          else { 
              distance = 'today'
            }
          if (inEditMode.status && inEditMode.rowKey === currenttask._id) {
            return <EditTask task={currenttask} deleteTask={deleteTask} key={currenttask._id} distance={distance} editModeChange={editModeChange} />;
          } else {
            return <Task task={currenttask} deleteTask={deleteTask} key={currenttask._id} distance={distance} editModeChange={editModeChange}/>;
          }
          
        })
      
    }
        
      return (
        <div className='tableWrapper'>
          <form class="newTask">
            <table className='table'>
              <thead className='thead-dark'>
                <tr> 
                  <th>Description</th>
                  <th>Distance</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { theList() }
              </tbody>
            </table>
          </form>
        </div>
      );
}

export default TasksList;