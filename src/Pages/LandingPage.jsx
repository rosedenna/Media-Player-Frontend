import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigatebyUrl = useNavigate()
  return (  
    <>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col lg={5} className='m-5'>
          <h1 style={{ fontSize: '40px' }}>Welcome to <span className='text-warning'>Media Player</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati voluptate placeat blanditiis itaque doloremque error explicabo non sequi, hic qui veritatis dolorem. Consectetur, deleniti ullam pariatur nulla fuga dolorem?
            Itaque eius architecto, excepturi recusandae voluptates suscipit repudiandae deleniti! Ea repudiandae, quos culpa autem totam vero quae asperiores, est id enim voluptatem maiores earum accusantium assumenda! Suscipit nulla quos delectus!</p>
          <button className='btn btn-info mt-4' onClick={() => navigatebyUrl('/home')}>Get Started</button>
        </Col>
        <Col lg={5}>
          <img src="https://img.freepik.com/premium-photo/black-silhouette-man-wearing-headphones-white-background_923894-6283.jpg" alt="" />
        </Col>
        <Col></Col>
      </Row>

      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Features</h3>
        <div className="cards my-5 d-flex align-items-center justify-content-between w-100">
          <Card style={{ width: '20rem' }} className='p-4 bg-light'>
            <Card.Img variant="top" height={'300px'} src="https://i.pinimg.com/originals/6f/5f/f3/6f5ff36fd8ffefa40bf466df6c693ef1.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }} className='p-4 bg-light'>
            <Card.Img variant="top" height={'300px'} src="https://i.pinimg.com/originals/62/26/43/6226435516042edfe1a4514a44e2023a.gif" />
            <Card.Body>
              <Card.Title>Categorized Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }} className='p-4 bg-light'>
            <Card.Img variant="top" height={'300px'} src="https://i.gifer.com/origin/7d/7d1c0015912d9b30038595971af2ad57_w200.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
          <h4 className='text-warning'>Simple, Powerful and Fast</h4>
          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span> : Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Sint harum in a debitis nostrum sit exercitationem corporis doloribus reiciendis
            voluptatum, illum, fugit voluptates quae aliquid delectus minus deserunt! Excepturi, optio.</h6>

          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span> : Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Sint harum in a debitis nostrum sit exercitationem corporis doloribus reiciendis
            voluptatum, illum, fugit voluptates quae aliquid delectus minus deserunt! Excepturi, optio.</h6>

          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span> : Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Sint harum in a debitis nostrum sit exercitationem corporis doloribus reiciendis
            voluptatum, illum, fugit voluptates quae aliquid delectus minus deserunt! Excepturi, optio.</h6>

        </div>
        <div className="video col-lg-5">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/GCWl50HQZIM?si=93NRw1bzxeUelIqv"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        </div>
      </div>
    </>
  )
}

export default LandingPage
