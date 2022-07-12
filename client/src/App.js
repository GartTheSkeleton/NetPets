import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Profile from './components/Profile';
import Activities from './components/Activities';
import Store from './components/Store';
import User from './components/User';
import Login from './pages/Login';
import Register from './pages/Signup';


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
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
