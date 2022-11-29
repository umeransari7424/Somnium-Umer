import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Elemets/Layout/Header'
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from '../Components/Elemets/Layout/Footer'
// import "bootstrap/dist/js/bootstrap.bundle"

export default function Home() {
  return (
    <>
    <Header/>
    <Footer/>
    </>
  )
}
