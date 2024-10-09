import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addHistoryAPI, deleteAVideoAPI } from '../../../Media Server/server/allAPI';

function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {
    setShow(true)
    const {caption, link}=video
    let  today = new Date()
    //console.log(new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:'2-digit',
      //minute:"2-digit",second:"2-digit"
    //}).format(today));    

    let timeStamp = new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:'2-digit',
      minute:"2-digit",second:"2-digit"
    }).format(today);    

    let videoHistory = {caption,link,timeStamp}
    await addHistoryAPI(videoHistory)
  }

  const deleteVideo = async(id) =>{
    await deleteAVideoAPI(id)
    setDeleteVideoResponse(true)
  }
  
  const dragStarted = (e,id)=>{
    console.log("Drag started, Video id: "+id);
    e.dataTransfer.setData('Videoid',id)
    
  }
  
  return (
    <div>
      <Card style={{ width: '15rem' }} className='border shadow-lg mb-3' draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img variant="top" height={"200px"} src={video.url} onClick={handleShow} />
      <Card.Body className='bg-light'>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h5>{video.caption}</h5>

    {insideCategory?null:<button onClick={()=>deleteVideo(video.id)} className='btn'> <i className="fa-solid fa-trash text-danger "></i></button>
}          </Card.Title>
       
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default VideoCard
