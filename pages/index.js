// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import Available from '../Components/Elemets/Available'
import Header from "../Components/Layout/Header"
import Sonium from '../Components/Elemets/Sonium'
import Ingame from '../Components/Elemets/Ingame'
import Virtual from '../Components/Elemets/Virtual'
import Footer from '../Components/Layout/Footer'
import Hero from '../Components/Elemets/Hero'
import Community from '../Components/Elemets/Community'
import Ethereum from '../Components/Elemets/Ethereum'
import Events from '../Components/Elemets/Events'
// import "bootstrap/dist/js/bootstrap.bundle"

export default function Home() {
  return (
    <> 
    {/* <Available/> */}
    <Header/>
    <Hero/>
    <Ethereum/>
    <Virtual/>
    <Ingame/>
    <Sonium/>
    <Events/>
    <Community/>
   
    <Footer/>
    </>
  )
}
