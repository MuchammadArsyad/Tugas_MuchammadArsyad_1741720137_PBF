import React from 'react';

import './App.css';

function App() {
  return (
    <div className="kotak_login">
      <p class="tulisan_login"><strong>Tugas Pertemuan Ketiga</strong></p>
      
      <form>
        <label>Username</label>
        <input type="text" name="username" class="form_login" placeholder="Masukan Username"></input>
       
        <label>Password</label>
			  <input type="text" name="password" class="form_login" placeholder="Masukan password"></input>

        <input type="submit" class="tombol_login" value="LOGIN"></input>
      </form>
      
    </div>
  );
}

export default App;
