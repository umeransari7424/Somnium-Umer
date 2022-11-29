import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import Available from '../Components/Elemets/Available'
import Social from '../Components/Elemets/Social'
import Sonium from '../Components/Elemets/Sonium'
import Ingame from '../Components/Elemets/Ingame'
import Virtual from '../Components/Elemets/Virtual'
// import "bootstrap/dist/js/bootstrap.bundle"

export default function Home() {
  return (
    <> 
    {/* <Available/> */}
    <Virtual/>
    <Ingame/>
    <Sonium/>
    <Social/>
    </>
  )
}
