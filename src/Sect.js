import React, { useEffect, useState } from 'react'
import './Sect.css'
import { useRef } from 'react';

function Sect() {
    const [scrollamnt,setsrollamnt]=useState(0);

    useEffect(()=>{
        const handleScroll=()=>{
            setsrollamnt(window.scrollY);
        }

        window.addEventListener('scroll',handleScroll);

        return()=>{
            window.removeEventListener('scroll',handleScroll);
        }

    },[]);

    // var element = document.getElementById('slowdiv');

    // element.addEventListener("scroll", function(event) {
    //     event.preventDefault();
    //     element.scrollTop += event.deltaY * 0.8; 
    //   });

    


    
  return (
    <div id='slowdiv'  style={{overflowY:scrollamnt>770?"hidden":"auto"}} className='sec'>
        
        <span style={{color:scrollamnt>710?'white':'grey'}}>In</span>
        <span style={{color:scrollamnt>715?'white':'grey'}}>Chronicle</span>
        <span style={{color:scrollamnt>720?'white':'grey'}}>everything</span>
        <span style={{color:scrollamnt>725?'white':'grey'}}>is</span>
        <span style={{color:scrollamnt>730?'white':'grey'}}>made</span><br />
        <span style={{color:scrollamnt>735?'white':'grey'}}>with</span>
        <span style={{color:scrollamnt>740?'white':'grey'}}>Blocks</span>
        <span style={{color:scrollamnt>745?'white':'grey'}}>that</span>
        <span style={{color:scrollamnt>750?'white':'grey'}}>come</span>
        <span style={{color:scrollamnt>755?'white':'grey'}}>with</span>
        <span style={{color:scrollamnt>760?'white':'grey'}}>pixel</span><br />
        <span style={{color:scrollamnt>765?'white':'grey'}}>perfect</span>
        <span style={{color:scrollamnt>770?'white':'grey'}}>design,</span>
        <span style={{color:scrollamnt>775?'white':'grey'}}>interactivity</span>
        <span style={{color:scrollamnt>780?'white':'grey'}}>and</span><br />
        <span style={{color:scrollamnt>785?'white':'grey'}}>motion</span>
        <span style={{color:scrollamnt>790?'white':'grey'}}>out</span>
        <span style={{color:scrollamnt>795?'white':'grey'}}>of</span>
        <span style={{color:scrollamnt>800?'white':'grey'}}>the</span>
        <span style={{color:scrollamnt>810?'white':'grey'}}>box.</span>
        <span style={{color:scrollamnt>815?'white':'grey'}}>Instead</span><br />
        <span style={{color:scrollamnt>820?'white':'grey'}}>of</span>
        <span style={{color:scrollamnt>825?'white':'grey'}}>designing</span>
        <span style={{color:scrollamnt>830?'white':'grey'}}>from</span>
        <span style={{color:scrollamnt>835?'white':'grey'}}>scratch,</span>
        <span style={{color:scrollamnt>840?'white':'grey'}}>simply</span><br />
        <span style={{color:scrollamnt>845?'white':'grey'}}>choose</span>
        <span style={{color:scrollamnt>850?'white':'grey'}}>the</span>
        <span style={{color:scrollamnt>855?'white':'grey'}}>right</span>
        <span style={{color:scrollamnt>860?'white':'grey'}}>one</span>
        <span style={{color:scrollamnt>870?'white':'grey'}}>from</span><br />
        <span style={{color:scrollamnt>875?'white':'grey'}}>our</span>
        <span style={{color:scrollamnt>880?'white':'grey'}}>library</span>
        <span style={{color:scrollamnt>885?'white':'grey'}}>of</span>
        <span style={{color:scrollamnt>890?'white':'grey'}}>blocks</span>
        <span style={{color:scrollamnt>895?'white':'grey'}}>and</span>
        <span style={{color:scrollamnt>900?'white':'grey'}}>see</span>
        <span style={{color:scrollamnt>905?'white':'grey'}}>the</span><br />
        <span style={{color:scrollamnt>910?'white':'grey'}}>magic</span>
        <span style={{color:scrollamnt>915?'white':'grey'}}>unfold.</span>
        
        
    </div>
  )
}

export default Sect
