import Container from 'react-bootstrap/Container'

function Library(){
  return(
    <>
      <Container className="container text-center library">
        <p>
          Select a Library:
        </p>
        <input type="checkbox" className="btn-check" id="btn-check-outlined" autocomplete="off" checked />
        <label className="btn btn-outline-success" for="btn-check-outlined">web3.js</label>
        <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off" />
        <label className="btn btn-outline-success" for="btn-check-outlined">ethers.js</label>
      </Container>
    </>
  )

}

export default Library