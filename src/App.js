import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Authenticated from './modes/Authenticated';
import Unauthenticated from './modes/Unauthenticated';

function App() {

  const [auth, setAuth] = useState(true)     

  const signIn = () => {
    setAuth(true)
  }

  return (
    <div className='bg-slate-200'>
      <BrowserRouter >
        {
          auth ?
            <Authenticated /> :
            <Unauthenticated signIn={signIn} />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;