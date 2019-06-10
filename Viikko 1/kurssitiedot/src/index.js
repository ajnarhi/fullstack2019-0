import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }

  return (
    <div>
    <Header course={course.name}/>
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
    return (
      <div>
        <h1>{props.course} </h1>
      </div>
    )
  }
 
  const Content = (props)=> {
    return (
      <div>
        <Part name={props.parts[0].name} exercise={props.parts[0].exercises}/> 
        <Part name={props.parts[1].name} exercise={props.parts[1].exercises}/> 
        <Part name={props.parts[2].name} exercise={props.parts[2].exercises}/>

      </div>
    )
  }

  const Part=(props)=>{
      return(
        <div>
        <p>{props.name} {props.exercise}</p>    
      </div>

      )
  }
  
  const Total = (props) => {
    return (
      <div>
        <p>Yhteensä {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises} tehtävää</p>
      </div>
    )
  }




ReactDOM.render(<App />, document.getElementById('root'))


  /*
    
   
  TÄmä toimi kohtaan App ennen kohtaa 1.3
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
     <Header course={course}/>
     <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />  
     <Total total={exercises1+exercises2+exercises3}/>  
    </div>
  )
}

Tämä toimii ennen kohtaa 1.4
const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = {
      name: 'Reactin perusteet',
      exercises: 10
    }
    const part2 = {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
    }
    const part3 = {
      name: 'Komponenttien tila',
      exercises: 14
    }
  
    return (
      <div>
     <Header course={course}/>
     <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises}/>
     <Total total={part1.exercises+part2.exercises+part3.exercises}/>
      </div>
    )
  }


*/

/*import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const parts = [
    {
      name: 'Reactin perusteet',
      exercises: 10
    },
    {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
    },
    {
      name: 'Komponenttien tila',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )

}

const Header = (props) => {
    return (
      <div>
        <h1>{props.course} </h1>
      </div>
    )
  }
 
  const Content = (props)=> {
    return (
      <div>
        <Part name={props.part1} exercise={props.exercises1} />
        <Part name={props.part2} exercise={props.exercises2} />
        <Part name={props.part3} exercise={props.exercises3}/>
      </div>
    )
  }

  const Part=(props)=>{
      return(
        <div>
        <p>{props.name} {props.exercise}</p>    
      </div>

      )
  }
  
  const Total = (props) => {
    return (
      <div>
        <p>Yhteensä {props.total} tehtävää</p>
      </div>
    )
  }




ReactDOM.render(<App />, document.getElementById('root'))



Koodi joka toimii kohdan 1.4 jälkeen ennenkohtaa 1.5

import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const parts = [
    {
      name: 'Reactin perusteet',
      exercises: 10
    },
    {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
    },
    {
      name: 'Komponenttien tila',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )

}

const Header = (props) => {
    return (
      <div>
        <h1>{props.course} </h1>
      </div>
    )
  }
 
  const Content = (props)=> {
    return (
      <div>
        <Part name={props.parts[0].name} exercise={props.parts[0].exercises}/> 
        <Part name={props.parts[1].name} exercise={props.parts[1].exercises}/> 
        <Part name={props.parts[2].name} exercise={props.parts[2].exercises}/>

      </div>
    )
  }

  const Part=(props)=>{
      return(
        <div>
        <p>{props.name} {props.exercise}</p>    
      </div>

      )
  }
  
  const Total = (props) => {
    return (
      <div>
        <p>Yhteensä {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises} tehtävää</p>
      </div>
    )
  }




ReactDOM.render(<App />, document.getElementById('root'))


*/ 