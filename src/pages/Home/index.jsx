import React, { useState, } from 'react';
import './styles.css';
import { Card } from '../../components/Card';

export function Home() {

 const [studentName, setStudentName] = useState('');
 const [students, setStudents] = useState(()=>{
  const students = localStorage.getItem("students");
  if (!students) {
    return [];
  }
  return JSON.parse(students);
 });
 const [user, setUser] = useState({ name: '', avatar: '' });

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
       })
    };
    const newArrayStudents =[...students, newStudent];

    setStudents( newArrayStudents );
    localStorage.setItem("students", JSON.stringify(newArrayStudents))
  }

  // useEffect(() => {
  //   fetch ('https://api.github.com/users/danielclaytonborgtx')
  //   .then (res => res.json())
  //   .then (data => {
  //     setUser({
  //       name: data.name,
  //       avatar: data.avatar_url,
  //     })
  //   })
  // }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>Meu niver</strong>
          {/* <img src={user.avatar} alt="" /> */}
        </div>
      </header>
      
      <input 
        type="text" 
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}/>

      <button type="button" onClick= {handleAddStudent}>
        Adicionar
      </button> 

      {
        students.map(student => (
          <Card 
            key={student.time}
            name={student.name} 
            time={student.time} 
          />
        ))
      }
    </div>
  )
}


