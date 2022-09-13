import './App.css';
import { useEffect } from 'react';
import { useState } from 'react'
import Header from './Header'
import Library from './Library'
import Description from './Description'
import {VoteSection} from './VoteSection'
import AboutMe from './AboutMe'
import Footer from './Footer'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
//import Web3 from 'web3'

function App() {

  const [walletAddress, setWalletAddress] = useState("")

  function setWalletValue(value){
    setWalletAddress(value)
  }


  useEffect(() => {
    if (window.ethereum){
      // window.ethereum.request({
      //   method: 'eth_requestAccounts'
      // }).then(accounts => console.log(accounts))
      
      // const web3 = new Web3(window.ethereum)
      // web3.eth.requestAccounts().then(console.log)
    }
  })

  return (
    <>
      <Header setWallet={setWalletValue}></Header>
      <Container className="flex-shrink-0">
        <Container className='text-center'>
          <Badge className="status" bg="danger">Status: Work In Progress</Badge>
        </Container>
        <Library></Library>
        <Description></Description>
        <VoteSection></VoteSection>
      </Container>
      <AboutMe></AboutMe>
      <Footer></Footer>
    </>

  );
}



export default App;
