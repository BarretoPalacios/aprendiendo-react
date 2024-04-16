import './App.css'
import	{ContactFacebook} from './contact-facebook'
import { CardUserGithub } from './card-user-github'
import { users } from './data'

export function App (){
  
  return (
    <>
    <div className="cards">

      {
        users.map(u =>{
          const {name, user, email, conect} = u
          return(
            <CardUserGithub
              name={name}
              user={user}
              email={email}
              conect={conect}
              key={email}
            />
          )
        })
      }

    </div>
      
    </>
  )
}