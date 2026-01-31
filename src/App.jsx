
import './App.css'

function App() {
  return (
    <>
      <h1>Vit React</h1>
      <Person></Person>
      <Language name ="Sabbir" tech ="JavaScript"></Language>
      <Language name ="Sabbir" tech ="JavaScript"></Language>
      
    </>
  )
}

function Person() {
  return(
    <h1>FontEnd Developer</h1>
  )
}

function Language(Props){
  return(
    <div style={{
      border: '1px solid green',
      borderRadius :'20px',
      marginTop: '10px',
    }}>
      <h2>Name: {Props.name}</h2>
      <p>Department: {Props.tech}</p>
    </div>
    
  )
}

export default App
