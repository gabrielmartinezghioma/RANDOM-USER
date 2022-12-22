import './App.css'
import data from './data/users.json'
import User from './components/User'
import { useState } from 'react';
import Button from './components/Button';
import colors from './data/colors';

function App() {

  function newRamdom(array) {
    let indexNewRamdom = Math.floor(Math.random() * array.length);
    return indexNewRamdom;
  }

  let numberRamdon = newRamdom(data);
 // console.log(numberRamdon);

  const [indexRamdon, setIndexRamdom] = useState(numberRamdon);

  let color = newRamdom(colors);

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
  };

  return (

    <section style={bgColor} >

      <div className='section__div'>
        {<User
          name={`${data[numberRamdon].name.title} ${data[numberRamdon].name.first} ${data[numberRamdon].name.last}`}
          picture={`${data[numberRamdon].picture.large}`}
          iconEmail={<i className='bx bxs-envelope'></i>}
          email={` ${data[numberRamdon].email}`}
          iconPhone={<i className='bx bxs-phone'></i>}
          phone={` ${data[numberRamdon].phone}`}
          iconLocation={<i className='bx bxs-location-plus'></i>}
          location={` ${data[numberRamdon].location.country} ${data[numberRamdon].location.state} ${data[numberRamdon].location.city}`}
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
        icon={<i className='bx bx-shuffle bx-tada' ></i>}
      />}
      </div>

    </section>
  )
}

export default App

