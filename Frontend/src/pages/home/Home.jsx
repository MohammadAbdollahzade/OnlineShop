import React, {useEffect , useContext} from 'react'
import { useNavigate} from 'react-router-dom'
import MenuBurger from '../../components/Home/menuBurger/MenuBurger'
import Loading from '../../components/Home/loading/Loading'
import NavbarLeft from '../../components/Home/navbarLeft/NavbarLeft'
import NavbarTop from '../../components/Home/navbarTop/NavbarTop'
import HomePage from '../../components/Home/homePage/HomePage'
import CartPage from '../../components/Home/cartPage/CartPage'
import ProfilePage from '../../components/Home/profilePage/ProfilePage'
import MessagesPage from '../../components/Home/messagesPage/MessagesPage'
import SettingsPage from '../../components/Home/settingsPage/SettingsPage'
import './home.scss'

function Home() {
  
  const homeUser = useNavigate()

    useEffect(() => {
      if(localStorage.getItem('username') === null){
        document.body.style.display = 'none'
        homeUser('/login')
      }else{
        document.body.style.display = 'block'
        document.body.style.backgroundColor = '#f1f3f5'
        document.title = 'Home | Online Shop'
      }
    }, [])

  return (
    <>
    <MenuBurger />
    <NavbarLeft />
    <NavbarTop />
    <HomePage />
    <CartPage />
    <ProfilePage />
    <MessagesPage />
    <SettingsPage />
    </>
  )
}

export default Home