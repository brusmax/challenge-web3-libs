import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';

function AboutMe(){
  return(
    <>
      <Container className="about-me text-center">
        <h2>About Me</h2>
        <p className="col-6 text-center">
        <img src="https://pbs.twimg.com/profile_images/1543397379101102080/dvByZ1v2_400x400.jpg" alt='@Brusmax' className="rounded-circle profile-pic" />
        Hi, my name is Enrique Rodriguez (@Brusmax). I'm a Backend Developer +10 years of experience 
        working with Ruby, NodeJs, PHP, Learning about Web3: Crypto, Solidity, React, Smart Contracts and Dapps.
        </p>
        <p>
          Find me here:<br />
          <Button variant="primary" href="https://www.linkedin.com/in/brusmax/">Linkedin</Button>{' '}
          <Button variant="dark" href="https://github.com/brusmax">Github</Button>{' '}
          <Button variant="info" href="https://brusmax.com/">Www</Button>{' '}


        </p>
      </Container>
    </>
  )

}

export default AboutMe