import './App.css'
export default function Object({person}){
    console.log(person)
    return(
            <div className='run'>
                <h1>Id: {person.id}</h1>
                <h2>Name: {person.name}</h2>
                <h3>Age: {person.age}</h3>
            </div>
    )
}