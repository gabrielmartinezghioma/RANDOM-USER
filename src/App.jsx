import './App.css'
import data from './data/users.json'
import User from './components/User'
import { useState } from 'react';
import Button from './components/Button';
import colors from './const/colors';

function App() {

  let numberRamdon = Math.floor(Math.random() * data.length);
  console.log(numberRamdon);

  const [indexRamdon, setIndexRamdom] = useState(numberRamdon);

  function newRamdom(array) {
    let indexNewRamdom = Math.floor(Math.random() * array.length);
    return indexNewRamdom;
  }

  let color = newRamdom(colors)

  const bgColor = {
    backgroundColor: colors[color],
    color: colors[color],
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }

  return (

    <section style={bgColor} >

      <div className='section__div'>
        {<User
          name={`${data[newRamdom(data)].name.title} ${data[newRamdom(data)].name.first} ${data[newRamdom(data)].name.last}`}
          picture={`${data[newRamdom(data)].picture.large}`}
          iconEmail={<i className='bx bxs-envelope'></i>}
          email={` ${data[newRamdom(data)].email}`}
          iconPhone={<i className='bx bxs-phone'></i>}
          phone={` ${data[newRamdom(data)].phone}`}
          iconLocation={<i className='bx bxs-location-plus'></i>}
          location={` ${data[newRamdom(data)].location.country} ${data[newRamdom(data)].location.state} ${data[newRamdom(data)].location.city}`}
        />
        }
      </div>

      <div className='div__button' 
      style={
        {backgroundColor:colors[color]}
        }> 
        {<Button
        classStyle={'section__button'}
        click={() =>
          setIndexRamdom(newRamdom(data))}
        icon={<i class='bx bx-shuffle bx-tada' ></i>}
      />}
      </div>

    </section>
  )
}

export default App

