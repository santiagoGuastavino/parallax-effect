import './styles.css'
import React, { useRef } from 'react';
import moon from '../images/moon.png';
import land from '../images/land.png';
import cat from '../images/cat.gif';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

let App = () => {

  let text = {
    title: 'This is Major Tom to Ground Control',
    subtitle: 'Succesful landing!'
  }

  let ref = useRef()

  return (
    <div>
      <Parallax pages={ 4 } ref={ ref }>

        <ParallaxLayer
          offset={ 0 }
          speed={ 1 }
          factor={ 2 }
          style={{
            backgroundImage: `url(${ moon })`,
            backgroundSize: 'contain'
          }}
        />

        <ParallaxLayer
          offset={ 2 }
          speed={ 1 }
          factor={ 4 }
          style={{
            backgroundImage: `url(${ land })`,
            backgroundSize: 'cover'
          }}
        />

        <ParallaxLayer
          sticky={{
            start: .4,
            end: 2.5
          }}
        >
          <div className='img-box'>
            <img src={ cat } alt='cat-gif' />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={ 0.2 }
          speed={ .05 }
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>
            { text.title }
          </h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={ 3 }
          speed={ 2 }
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2 className='subtitle'>
            { text.subtitle }
          </h2>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
};

export default App;