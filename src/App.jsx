import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const drumSounds = [
    {
      name: 'Heater 1',
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
      trigger: 'Q'
    },
    {
      name: 'Heater 2',
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
      trigger: 'W'
    },
    {
      name: 'Heater 3',
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
      trigger: 'E'
    },
    {
      name: 'Heater 4',
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
      trigger: 'A'
    },
    {
      name: 'Clap',
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
      trigger: 'S'
    },
    {
      name: 'Open HiHat',
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
      trigger: 'D'
    },
    {
      name: "Kick n' Hat",
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
      trigger: 'Z'
    },
    {
      name: 'Kick',
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
      trigger: 'X'
    },
    {
      name: 'Closed HiHat',
      url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
      trigger: 'C'
    },
  ];


  const [activeKey, setActiveKey] = useState('');


  const playSound = (variable) => {
    const audio = document.getElementById(variable.trigger);
    audio.play();

    setActiveKey(variable.name);
  };


  useEffect(()=>{
    document.addEventListener('keydown', (e)=> {
      const key = e.key.toUpperCase();
      const drum = drumSounds.find(d => d.trigger === key);

      if (drum) {
        playSound(drum);
      }

    })
  }, []);


  return (
    <>

      <div id='drum-machine'>

        <div id='display'>{activeKey}</div>

        {drumSounds.map((drums)=>(          
          <button 
            key={drums.url}
            id={drums.name}
            className='drum-pad' 
            onClick={()=>{playSound(drums)}}
          >
            {drums.trigger}

            <audio
              id={drums.trigger}
              src={drums.url}
              className='clip'
            ></audio>     
          </button>
        ))}

      </div>

    </>
  )
}

export default App
