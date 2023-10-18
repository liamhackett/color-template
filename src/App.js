import './App.css';

import React from 'react';
import Surface from './components/Surface/Surface';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Button from './components/Button/Button';
import TextField from './components/TextField/TextField';

function App() {
  return (
    <div>
      <ThemeSwitcher />
      <main>
        <section>
          <div className='surface-samples'>
            <Surface surfaceNumber={'surface1'} />
            <Surface surfaceNumber={'surface2'} />
            <Surface surfaceNumber={'surface3'} />
            <Surface surfaceNumber={'surface4'} />
          </div>
          <TextField label='Name' />
          <TextField label='Email' isEmail={true}/>
          <TextField label='Password' isPassword={true}/>
          <Button text='Sign up' height='38px' width='auto' />
        </section>

        <section>
        <div className='text-samples'>
          <h1 className='text1'>
            <span className='swatch brand rad-shadow'></span>
            Brand
          </h1>
          <h1 className='text1'>
            <span className='swatch text1 rad-shadow'></span>
            Text Color 1
          </h1>
          <h1 className='text2'>
            <span className='swatch text2 rad-shadow'></span>
            Text Color 2
          </h1>
          <br />
          <p className='text1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='text2'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h1>h1 default</h1>
          <h2>h2 default</h2>
          <h3>h3 default</h3>
          <p> p default</p>
          <Button text='Learn More' />
          <Button text='Disabled' disabled={true}/>
          <Button text='Outline' outline={true}/>

        </div>
      </section>

      </main>
    </div>
  );
}

export default App;
