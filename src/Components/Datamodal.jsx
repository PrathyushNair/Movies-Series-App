import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Carousel } from './Carousel';




export const Datamodal = ({open,handleModalClose,content,media_type}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    bgcolor: "#0c111b",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  console.log("content",content)
  return (
    <Modal
        keepMounted
        open={open}
        onClose={handleModalClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div style={{display:"flex",gap:"15px"}}>
              <Box>
                <img  alt="poster" src={content?.poster_path?"https://image.tmdb.org/t/p/w300/" + content?.poster_path:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}></img>
              </Box>
              <Box>
                <div style={{color:"white"}}>
                  <h2>{content.title || content.name}</h2>
                  <p>{content.overview}</p>
                  
                    <Carousel media_type={media_type||content.media_type} id={content.id}/>
                  
                </div>
              </Box>
          </div>
        </Box>
      </Modal>
  )
}
