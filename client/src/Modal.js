import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal, Row, Col, Container } from "react-bootstrap";
import Form from "./Form";
import axios from "axios";
import "./App.css";
import MaterialTable from 'material-table';



const Modalx = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [Details, setDetails] = useState([]);
  const [show, setShow] = useState(false);
  const TableAttributes = () => {
    return (
      <MaterialTable
      title="Full List"
      
      columns={ [
       { title: 'Company Name', field: 'Name' },
       { title: 'Company Type', field: 'Type' },
       { title: 'Current Status', field: 'Status' },
       { title: 'Role', field: 'Role' },
       { title: 'Country', field: 'Country' },
       
     ]}
     data={Details}
     style={{width:"70%"}}
    
      />
  
    );
  };
  
  

  const getList = (e) => {
    setModalShow(false);
    e.preventDefault();
    console.log(Details.length);
    axios
      .get("/getlist")
      .then((response) => {

        console.log(response.data);
        
        setShow(true);
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const Clicked=()=>{
    console.log("lal");
    setModalShow(false);
  }
  return (
    <>
      <div className="heading">
        <h1>Submit Your Company Status</h1>
      </div>
      <Container  className="Add">
        <Row>
          <Col>
            <Button onClick={() => setModalShow(true)}>
              Add your Response
            </Button>
          </Col>
          <Col>
            <Button onClick={getList}>Get Full List of Companies</Button>
          </Col>
        </Row>
      </Container >

      <Modal
        size="lg"
        aria-labelledby="modal-title"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">Add your response</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form  onClicked={Clicked}/>
        </Modal.Body>
      </Modal>
      {/* {Details} */}
      <br />
      <div className="Add">
      {show && <TableAttributes />}
  
      </div>
    </>
  );
};
export default Modalx;
