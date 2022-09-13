import Container from 'react-bootstrap/Container'

function Footer(){
  return(
    <>
      <footer className="footer mt-auto py-3 bg-light text-center">
        <Container className="container">
          <span className="text-muted">By 
            <a href="https://www.brusmax.com" target='_blank' rel='noreferrer'>
              @Brusmax
            </a>
            </span>
        </Container>
      </footer>
    </>
  )

}

export default Footer