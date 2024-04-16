import './App.css'
import {useState} from 'react'

export function ContactFacebook ({user}) {

    const [isfollowin , setIsFollowing] = useState(false)

    const segir =()=> setIsFollowing(!isfollowin)

    const follow = isfollowin ? 'Siguiendo' : 'seguir'
    
    return(
        <section className='ctc-facebook'>
            <div className="ctc-facebook-box-img">
                <img src={`https://unavatar.io/github/${user}`} alt={user} className='ctc-facebook-img' />
            </div>
            <b className='ctc-facebook-user'>{user}</b>
            <button onClick={segir}> 
                {follow} 
            </button>
        </section>
    )
}


