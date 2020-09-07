import React,{useState, useEffect} from 'react'
import logo from '../image/logo.png';
import '../assets/all.min.css';
import '../assets/nav.css'

function Nav() {
    const [show, setShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                setShow(true);
            }else{
                setShow(false);
            }
        })

        return () =>{
            window.removeEventListener('scroll');
        }
    },[]);
    
    return (
        <nav>
            <div className='nav-container'>
                <div className={show?'nav-flex show' : 'nav-flex'}>
                    <img src={logo} alt='Logo'/>
                    <i className='fas fa-bars' ></i>
                </div>
            </div>
            
        </nav>
    )
}

export default Nav
