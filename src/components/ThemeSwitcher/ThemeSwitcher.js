import React, { useState, useEffect } from 'react';
import './ThemeSwitcher.css';

function ThemeSwitcher() {
    
    const [theme, setTheme] = useState('auto');
    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };
    
    const setThemeAttribute = (theme) => {
        const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('color-scheme', theme);
        const themeColorMeta = document.querySelector("meta[name='theme-color']");
        
        if (themeColorMeta) {
            let color;
          
            switch (theme) {
                case 'dark':
                    color = '#21282a';
                break;
                case 'dim':
                    color = '#394246';
                break;
                case 'light':
                    color = '#002233';
                break;
                default:
                    color =  prefersDarkTheme ? '#21282a' : '#002233'; 
            }
          
            themeColorMeta.setAttribute('content', color);
          }
      };

    useEffect(() => {
        setThemeAttribute(theme);
    }, [theme]);

    return (
        <header>
            <h3>Scheme</h3>
            <form id='theme-switcher' className='header'>
                <div>
                <input
                    type='radio'
                    id='auto'
                    name='theme'
                    value='auto'
                    checked={theme === 'auto'}
                    onChange={handleThemeChange}
                />
                <label htmlFor='auto'>Auto</label>
                </div>
                <div>
                <input
                    type='radio'
                    id='light'
                    name='theme'
                    value='light'
                    checked={theme === 'light'}
                    onChange={handleThemeChange}
                />
                <label htmlFor='light'>Light</label>
                </div>
                <div>
                <input
                    type='radio'
                    id='dark'
                    name='theme'
                    value='dark'
                    checked={theme === 'dark'}
                    onChange={handleThemeChange}
                />
                <label htmlFor='dark'>Dark</label>
                </div>
                <div>
                <input
                    type='radio'
                    id='dim'
                    name='theme'
                    value='dim'
                    checked={theme === 'dim'}
                    onChange={handleThemeChange}
                />
                <label htmlFor='dim'>Dim</label>
                </div>
            </form>
        </header>
    );
}

export default ThemeSwitcher;