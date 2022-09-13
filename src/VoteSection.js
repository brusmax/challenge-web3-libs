import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Web3 from 'web3'


// function getLibrary(provider){
//   return new Web3(provider)
// }


function VoteSection(){
  
  return(
    <>
      <Container className="text-center vote-section">
        <h2>Vote Now</h2>
        <Badge bg="info">To vote you need to connect your wallet</Badge>
        <br />
        <Badge bg="dark">Fee: 0.01ETH/Vote</Badge>
        <br />
        <ConnectButton></ConnectButton>
        <Vote></Vote>
      </Container>
    </>
  )

}

function ConnectButton({setWallet}){

  return (
    <>
      <Button variant='success' onClick={Connect({setWallet})}>
        Connect with metamask &nbsp;
        <img src='metamask-icon.png' width="20px" alt="metamask" />
      </Button>
    </>
  )
}

function Vote(){
  return (
    <Container className='vote'>
      <p>Are you agree with the current proposal?</p>
      <Card>
        <Card.Img src="yes-circle.png" alt="Yes" />
        <Card.Body>
          <Button variant='success'>
            <img src="vote-yes.png" alt="YES" className='vote-button' />
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img src="no-circle.png" alt="No" />
        <Card.Body>
          <Button variant='danger'>
            <img src="vote-no.png" alt="NO" className='vote-button' />
          </Button>
        </Card.Body>
      </Card>
      <Thanks></Thanks>
      <NotFounds></NotFounds>
      <YouHaveVoted></YouHaveVoted>
      <CodeGitHub></CodeGitHub>
    </Container>
  )

}

function Thanks(){
  return (
    <>
      <Container className="thanks">
        <Badge bg="success">Thanks for your vote!</Badge> 
      </Container>
    </>
  )
}

function NotFounds(){
  return (
    <>
      <Container className="no-founds">
        <Badge bg="warning">Not enough founds to vote</Badge> 
      </Container>
    </>
  )
}

function YouHaveVoted(){
  return (
    <>
      <Container className="you-have-voted">
        <Badge bg="info">You have already voted</Badge> 
      </Container>
    </>
  )
}

function CodeGitHub(){
  return (
    <>
      <Button variant="dark" href="https://github.com/brusmax/challenge-web3-libs">Get This Code on Github</Button>
    </>
  )
}

function Connect({setWallet}){
  const web3 = new Web3(window.ethereum)
  web3.eth.requestAccounts().then( (account) => {
    console.log(account)
    setWallet(account)
  })
}

export {VoteSection, ConnectButton}