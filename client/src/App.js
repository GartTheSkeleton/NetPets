import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Profile from './components/Profile';
import Activities from './components/Activities';
import Store from './components/Store';
import Users from './components/Users';
import Login from './pages/Login';
import Register from './pages/Signup';


function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/store' element={<Store />} />
          <Route path='/user' element={<Users />} />
        </Route>

      </Routes>
    </>
  )
}

export default App;
