import { usaState } from 'react'
import reactLogo from '/react-1.svg'
import './Header.css'

function Header() {
    return (
        <div class='header'>
            <div class='left-group'>
                <span class='text'>React</span>
                <img src={reactLogo} alt='react-logo' class='reactLogo'/>
            </div>
            <div class='right-group'>
                <span class='text'>info</span>
                <span class='text'>login</span>
            </div>
        </div>
    );
}

export default Header;