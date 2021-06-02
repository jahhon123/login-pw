import React, {useState} from 'react'; 
import './App.css';

function App() {
  const [secondaryMode, setSecondaryMode] = useState(false);
  return (
  
    <div>
   

        <div className="App">
        <div className={secondaryMode ? 'blue' : 'light-mode'}>
        <div className='container'>
          <span style={{ color: secondaryMode ? 'grey' : 'yellow'}}>*</span>
          <div className='switch-checkbox'>
            <label className='switch'>
            <input type='checkbox' onChange={() => setSecondaryMode(!secondaryMode)}></input>
            <span className='slider round'></span>

            </label>
          </div>
          <span style={{color:secondaryMode ? '#c96dfd' : 'grey'}}>-</span>

        </div>
      </div>
          <h1>Welkome Back</h1>
          <p>We missed you! login to get Started</p>
       </div>
  

  <div className='box'>
<h2>Login</h2> 

 <button className='login' placeholder='Your email'> Your email <i class="fa fa-user"></i> </button> 
<div className='jahon'>
<button className='pasword' placeholder='password'>password <i class="fa fa-lock"></i> </button>
 </div>
<input className='chek' type='checkbox'></input> Remember Me <button className='sign'>Sign up</button>

<h4 className='bek'>Don't have an account? <a>Register instaed</a></h4>
</div>
    </div>
  
  );
}

export default App;
