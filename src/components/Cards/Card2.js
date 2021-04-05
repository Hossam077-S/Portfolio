import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MyImage from '../Images/img2.jpg'
import Modal from 'react-bootstrap/Modal'
import CarouselPortfolio from '../Carousels/CarouselPortfolio';

const useStyles = makeStyles({
    root: {
      maxWidth: 360,
    },
    media: {
      width: 'auto',
      height: 200,
    },
  });

export default function Card1() {
    const classes = useStyles();
    const [modalopen, setModalOpen ] = useState(false)

    const handleClose = () => setModalOpen(false);
    const handleShow = () => setModalOpen(true);

    return (
    <>
    <Card className={classes.root}  id="Card">
      <CardActionArea onClick={handleShow}>
        <CardMedia 
          className={classes.media}
          image={MyImage}
          title="Contemplative Reptile"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            Card2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Modal
      show={modalopen}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
      >
        <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{color: '#f5b921'}}>
            <CarouselPortfolio />
            <p>Some Description</p>
            <p>GitHub: <a href="https://github.com/Hossam077-S/FlutterApp"> https://github.com/Hossam077-S/FlutterApp </a></p>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-outline-secondary" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
    </Modal>
    
    </>
    );
}

