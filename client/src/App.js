import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup';
import Profile from './pages/Profile'
import Header from './components/Header';
import UserDetails from './components/UserDetails'
import { useState,useEffect } from 'react';
import OnLoginModal from './components/OnLoginModal';

function App() {
  const [isLogin,setIsLogin] = useState(false)
  const [userdetails,setUserdetails] = useState(null)
  const [modalVisible,setModalVisible] = useState(false)
  const [editUser,setEditUser] = useState({})
  const [loginModal,setLoginModal] = useState(false)

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
    setUserdetails(user)
    setIsLogin(true)
    }
  },[])


  const loginHandler = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      setUserdetails(user)
      setIsLogin(true)
      setLoginModal(true)
    }
  }

  const logoutHandler = () => {
    localStorage.removeItem('user')
    setUserdetails(null)
    setIsLogin(false)
  }

  const onClickReadMore = async (idx,page) => {
    const res = await fetch(`https://randomuser.me/api/?page=${page}&results=10&seed=aaa`)
    const jsonData = await res.json()
    setModalVisible(true)
    setEditUser(jsonData.results[idx])
  }


  const onClose = () => {
    setModalVisible(false)
    setEditUser({})
  }

  const onLoginClose = () => {
    setLoginModal(false)
  }

  return (
    <div>
      <Header isLogin={isLogin} logoutHandler={logoutHandler} userdetails={userdetails}/>
      {loginModal && <OnLoginModal userdetails={userdetails} onClose={onLoginClose}/>}
      {modalVisible && <UserDetails editUser={editUser} onClose={onClose}/>}
      <Routes>
        <Route path='/' element={<Home onClickReadMore={onClickReadMore}/>}/>
        <Route path='/login' element={<Login loginHandler={loginHandler}/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile userdetails={userdetails}/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
