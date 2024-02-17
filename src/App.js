import { useState } from 'react';
import './App.css';


function App() {

  const [student, setStudent] = useState("Лазарев Валерий");


  return (
    <>
      <img width="100px" src="https://sun9-63.userapi.com/impg/AFnc1NtJysf-lu-rrI0pT28AqpKtPQ4Ye2_ItQ/nDQoss_3CKA.jpg?size=1275x1621&quality=95&sign=81a79fac5be6ea0ca2c820b58728100a&type=album" />
      <p><b>Студент:</b> {student} </p>
      <Balls />
    </>
  );
}

function Balls() {

  const [balls, setBalls] = useState(0);

  const handleAddButton = () => {
    setBalls(balls + 20);
  }

  return (
    <>
      <p><b>Баллы:</b> {balls}</p>
      <button onClick={handleAddButton}>Прибавить баллы</button>
    </>
  );
}

function StudentCard() {

}

export default App;
