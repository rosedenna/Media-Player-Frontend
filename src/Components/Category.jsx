  import React, { useEffect, useState } from 'react'
  import { Button, FloatingLabel, Modal,Form, Col, Row } from 'react-bootstrap';
  import { addCategoryAPI, getCategoryAPI, deleteCategoryAPI, getAVideoAPI, updateCategoryAPI } from '../../../Media Server/server/allAPI';
import VideoCard from './VideoCard';

  function Category({dropVideoResponse}) {
    const [categoryName,setCategoryName]=useState("")
    const [allCategories,setAllCategories]=useState([])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAdd = async()=>{
      if(categoryName){
        const result = await addCategoryAPI({categoryName,allVideos:[]})
        console.log(result);
        if(result.status>=200 && result.status<300){
          handleClose()
          setCategoryName("")
          getCategories()
        }else{
          alert(result.message)
        }
        
      }
      else{
        alert("Please add a category name")
      }
    }

    const getCategories=async()=>{
      const {data}=await getCategoryAPI()
      setAllCategories(data)

    }
    useEffect(()=>{
      getCategories()
    },[dropVideoResponse])
    //console.log(allCategories);
    
    const removeCategory=async(id)=>{
      await deleteCategoryAPI(id)
      getCategories()
    }

    const dragOver=(e)=>{
      console.log("videocard dragging over the category");
      e.preventDefault()
    }
    const videoDropped=async(e,categoryId)=>{
      const Videoid = e.dataTransfer.getData("Videoid")
      console.log("Videoid: "+ Videoid +"Video Droppped Category Id" +categoryId);

      const {data}=await getAVideoAPI(Videoid)
      //console.log(data);
      const selectedCategory= allCategories.find(item=>item.id===categoryId)
      selectedCategory.allVideos.push(data)
      //console.log(selectedCategory);
      await updateCategoryAPI(categoryId,selectedCategory)
      getCategories()
      
      
    }

    const videoDragStarted=(e,videoId,categoryId)=>{
     const datashare={videoId,categoryId}
      e.dataTransfer.setData("data",JSON.stringify(datashare))

    }


    return (
      <div>
        <div className="d-grid">
          <button className='btn btn-info' onClick={handleShow}>Add Category</button>
        </div>

      {
        allCategories?.length>0?allCategories.map(category=>(
          <div className="border rounded mt-5 p-3" droppable="true" onDragOver={(e)=>dragOver(e)} onDrop={e=>videoDropped(e,category.id)}>
        <div className="d-flex justify-content-between align-items-center">
        <h5>{category.categoryName}</h5>
        <button className='btn' onClick={()=>removeCategory(category.id)}><i className='fa-solid fa-trash text-danger'></i></button>
        </div>

          <Row>
            {
              category?.allVideos?.length>0?category?.allVideos.map(card=>(
                <Col sm={12} draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                <VideoCard video={card} insideCategory={true}/>
                </Col>

              )):null
            }
          </Row>


      </div>
        )):<p>Nothing to display</p>
        }

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >        <Modal.Header closeButton>
            <Modal.Title>Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
      <Form>
      <FloatingLabel
          controlId="floatingName"
          label="Category"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Enter Category Name" onChange={e=>setCategoryName(e.target.value)}/>
        </FloatingLabel>
      </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAdd}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>


      </div>
    )
  }

  export default Category
