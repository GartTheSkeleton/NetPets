import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Profile from './components/Profile';
import Activities from './components/Activities';
import Store from './components/Store';
import User from './components/User';


function App() {
  return (
    <>
      <Routes>
      <Route index element={<Home />} />
        <Route path='/' element={<Layout />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/store' element={<Store />} />
          <Route path='/user' element={<User />} />
        </Route>

      </Routes>
    </>
  )
}

export default App;
