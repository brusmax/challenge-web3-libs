import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';

function Description(){
  return(
    <>
      <Container className="container content text-center">
        <p className="col-6 description text-center">
        This Dapp is about a proposal, users have to connect their wallets using 
        metamask and would be able to vote, only once. The fee per vote is 0.01 ETH, 
        and every user can vote only once. They can choose what library to use between 
        web3.js and ethers.js.
        <img src="ether.png" alt='voting web3'/>
        </p>
        <h2 className='text-center'>
          Results of the Voting
        </h2>
        <Resutls></Resutls>
      </Container>
    </>
  )

}

function Resutls(){
  return(
    <>
      <Card>
        <Card.Img src="yes.png" alt="Yes" />
        <Card.Body>
          <Card.Title>42</Card.Title>
          <Card.Text>Voted in pro of the proposal.</Card.Text>
        </Card.Body>
      </Card>
      <Card>
      <Card.Img src="no.png" alt="No" />
        <Card.Body>
          <Card.Title>33</Card.Title>
          <Card.Text>Voted in against of the proposal.</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Description