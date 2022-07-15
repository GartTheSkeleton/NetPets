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

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/store' element={<Store />} />
          <Route path='/user' element={<User />} />
        </Route>

      </Routes>
    </ApolloProvider>
  )
}

export default App;
