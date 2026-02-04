
import './App.css'
import Location from './Todo';
import Object from './obb';

function App() {
  const persons =[
    {id:1, name: 'Sabbir Khan', age:23},
    {id:2, name: 'Tabib Khan', age:24},
    {id:3, name: 'Topu Khan', age:25},
    {id:4, name: 'Hamim Khan', age:26},
    {id:5, name: 'Khalid Khan', age:27}
  ];
  return (
    <>
      <h1>Vit React</h1>
      {/* <Person></Person>
      <Language name ="Sabbir" tech ="JavaScript"></Language>
      <Language name ="Sabbir" tech ="JavaScript"></Language>
      <Eid salami="500" sname="Sabbir"></Eid>
      <Cricket></Cricket> */}

      {/* <ToDo learn ="React"></ToDo> */}
      {/* <Location current ="Dhaka"></Location> */}
      {
        persons.map(person => <Object key ={person.id} person ={person}></Object>)
      }
      
    </>
  )
}

// function Person() {
//   return(
//     <h1>FontEnd Developer</h1>
//   )
// }
// const {name, runs} ={name: 'Tamim', runs: '6000'}
//  function Cricket(){
//   return(
//     <div className='run'>
//         <h2>Name: {name}</h2>
//         <h2>Run: {runs}</h2>
//     </div>
//   )
//  }

//  function Eid ({salami, sname}){
//   return(
//     <div className='run'>
//     <h2>Eid Salami: {salami}</h2>
//     <h3>Name: {sname}</h3>
//   </div>
//   )
// }
// function Language(Props){
//   return(
//     <div style={{
//       border: '1px solid green',
//       borderRadius :'20px',
//       marginTop: '10px',
//     }}>
//       <h2>Name: {Props.name}</h2>
//       <p>Department: {Props.tech}</p>
//     </div>
    
//   )
// }

export default App
