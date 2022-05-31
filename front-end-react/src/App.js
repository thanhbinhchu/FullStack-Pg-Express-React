import './App2.css';
import { BrowserRouter, Route, Routes , NavLink } from "react-router-dom"
import { BaseMenuOnTop } from './components/BaseMenuOnTop';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import {Table} from './components/Table';
import Explore from './components/Explore';
import { Wallet } from './components/Wallet';
import { Test } from './components/Test';
import Table_Member from './components/Table_Member';
import Create_Acc from './components/Create_Acc';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div>

      <BaseMenuOnTop />

      <div class="container | my-4">
          <Form />
      </div>

      <div class="container | my-4">

      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/table" element={<Table />} />
        <Route path="/tablemember" element={<Table_Member />} />

        <Route path="/register" element= { <Create_Acc />} />

        <Route path="/login" element = {<Login />} />


        {/* <Route path="/wallet" element={<Wallet />}/>
        <Route path="/wallet/collected" element={<Test />}/> */}

      </Routes>

     
      
      
      </div>

      <Footer />

    </div>

    
    </BrowserRouter>
  </div>
);
}


export default App;

