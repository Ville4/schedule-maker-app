import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import AddPage from './components/addPage/addPage';
import BeginPage from './components/beginPage/beginPage';
import Schedule from './components/schedule/schedule';

// function App() {

//   // Sample data
// const employees = [
//   { name: 'Alice', available: ['Monday', 'Wednesday', 'Friday'], shift: null },
//   { name: 'Bob', available: ['Tuesday', 'Thursday', 'Saturday'], shift: null },
//   { name: 'Charlie', available: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], shift: null },
//   { name: 'Req', available: ['Monday', 'Wednesday', 'Friday'], shift: null },
//   { name: 'Xeno', available: ['Tuesday', 'Thursday', 'Saturday'], shift: null },
//   { name: 'Pool', available: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], shift: null },
//   { name: 'Nick', available: ['Monday', 'Wednesday', 'Friday'], shift: null },
//   { name: 'Cock', available: ['Tuesday', 'Thursday', 'Saturday'], shift: null },
//   { name: 'Andy', available: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], shift: null },
//   { name: 'Tyuup', available: ['Monday', 'Wednesday', 'Friday'], shift: null },
//   { name: 'ertq', available: ['Tuesday', 'Thursday', 'Saturday'], shift: null },
//   { name: 'Cer4', available: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], shift: null },
//   { name: 'Tena', available: ['Tuesday', 'Thursday', 'Saturday'], shift: null },
//   { name: 'Loss', available: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], shift: null },
//   { name: 'Pino', available: ['Monday', 'Wednesday', 'Friday'], shift: null },
//   { name: 'Grino', available: ['Tuesday', 'Thursday', 'Saturday'], shift: null },
//   { name: 'Susi', available: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], shift: null },
// ];

// // Function to assign shifts to employees based on availability
// function assignShifts(employees:any) {
//   const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
//   for (let day of daysOfWeek) {
//     let availableEmployees = employees.filter((emp: any) => emp.available.includes(day))
//     .map((emp:any) => emp.name);
//     if (availableEmployees.length > 0) {
//       //let shiftLength = Math.ceil(availableEmployees.length / 2);
//       //let shift1 = availableEmployees.slice(0, shiftLength);
//       //let shift2 = availableEmployees.slice(shiftLength);
//       if(availableEmployees.length > 5) {
//         let availableEmployeesForLimit = availableEmployees.slice(0, 5)
//         let availableEmployeesForNextDay = availableEmployees.slice(4)
//         let shiftLength = Math.ceil(availableEmployeesForLimit.length / 2);
//         let shift1 = availableEmployeesForLimit.slice(0, shiftLength);
//         let shift2 = availableEmployeesForLimit.slice(shiftLength);
//         //availableEmployeesForNextDay.forEach((emp:any) => alert(`on ${day} too much empoloyees ${emp} should go on next day`))
//         //console.log(`On ${day} will work ${shift1} on 1-st shift and ${shift2} on 2-nd shift`)
//       } else {
//         let shiftLength = Math.ceil(availableEmployees.length / 2);
//         let shift1 = availableEmployees.slice(0, shiftLength);
//         let shift2 = availableEmployees.slice(shiftLength);
//         //console.log(`On ${day} will work ${shift1} on 1-st shift and ${shift2} on 2-nd shift`)
//       }
      
//     }
//   }
// }

// assignShifts(employees);
// console.log(employees); // will print the assigned shifts for each employee

// // Function to calculate possibility of transferring a shift
// function calculateShiftTransfer(employees:any) {
//   const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
//   for (let day of daysOfWeek) {
//     let employeesOnShift = employees.filter((emp: any) => emp.shift && emp.shift.includes(day));
//     if (employeesOnShift.length > 5) { // assuming max 5 employees per shift
//       let excessEmployees = employeesOnShift.length - 5;
//       console.log(`On ${day}, there are ${employeesOnShift.length} employees scheduled to work. Consider transferring ${excessEmployees} employee(s) to another day or shift.`);
//     }
//   }
// }

// calculateShiftTransfer(employees);
//   return (
//     <div>

//     </div>
//   );

// }
function App() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<BeginPage/>} />
        <Route path='/add' element={<AddPage/>} />
        <Route path='/schedule' element={<Schedule/>} />
      </Routes>
    </div>
  );

}


export default App