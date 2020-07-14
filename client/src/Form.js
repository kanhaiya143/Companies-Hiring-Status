import React from "react";
import { useState } from "react";
import { Form, Button, Col,Modal} from "react-bootstrap";
import axios from "axios";

import myData from "./data.json";

const country = [];
const regions = [];
const City = [];
const type = [
  "Accounting",
  "Educational Institution",
  "Hospitality",
  "Marketing & Advertising",
  "Retail",
  "Automotive",
  "Real Estate",
  "Engineering",
  "Manufacturing",
  "Energy",
  "Media & Entertainment",
  "Consumer Tech",
  "Business Software",
  "Non-Profit",
  "Consumer Goods",
  "Consumer Services",
  "Design & Architecture",
  "Consulting & Services",
  "Productivity Software",
  "Financial Services",
  "IT",
  "Food & Dining",
  "Healthcare",
  "Communications",
  "Legal",
  "Construction",
  "Staffing & Recruiting",
  "Education Software",
  "Agriculture",
  "Government & defense",
  "Others",
];

Object.keys(myData).map(
  (key) => (
    country.push(myData[key].countryName), regions.push(myData[key].regions)
  )
);

type.sort();

const Country = country.map((country) => {
  return <option value={country}>{country}</option>;
});

const Type = type.map((type) => {
  return <option value={type}>{type}</option>;
});

const MyForm = (props) => {
  
  const [companyname, setCompanyName] = useState("");
  const [type, setType] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [city, setCity] = useState("");
  const [countryname, setCountry] = useState("");
  const [error,setError]=useState("");



  var data = {
    name: companyname,
    status: status,
    type: type,
    country: countryname,
    role: role,
  };

  const handleSubmit = (e) => {
    
    if(companyname!==""&&type!==""&&role!==""&&status!==""&&countryname!==""){
      props.onClicked(true);
    e.preventDefault();
    
  
    axios.post("/add", data).then(e=>{
      console.log("sent");
       
      
    }).catch(e=>{
      console.log("error");
    })
    
  }
    else{
      setError("Please Input all fields!");
    }
  };

  return (
   
    <Form >
     
      <Form.Group controlId="CompanyName" as={Col}>
        <Form.Label>Company Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Company Name"
          onChange={(e) => setCompanyName(e.target.value)}
          required
        
        />
      </Form.Group>
     
        <Form.Group as={Col} controlId="Type">
          <Form.Label>Company Type</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Select Type"
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option>Choose...</option>
            {Type}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="Role" as={Col}>
          <Form.Label>Role</Form.Label>
          <Form.Control
            placeholder="Enter Role"
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="Status">
          <Form.Label>Company Status</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Select Status"
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option>Choose...</option>
            <option>Currently Hiring</option>
            <option>Hiring Freeze</option>
            <option>Layoff</option>
          </Form.Control>
        </Form.Group>
     
        <Form.Group as={Col} controlId="Country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Select Country"
            onChange={(e) => setCountry(e.target.value)}
            SearchInput
            required
          >
            
            <option>Choose...</option>
            {Country}
            
          </Form.Control>
        </Form.Group>

        {/* <Form.Group as={Col} controlId="City">
          <Form.Label>City</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Select City"
            onChange={(e) => setCity(e.target.value)}
            
          >
            <SearchInput />
            <option>Choose...</option>
            
            
          </Form.Control>



        </Form.Group> */}

     
      <Form.Row style={{textAlign:"center"}}>
        <Col>
        <h5 style={{color:"red"}}>{error}</h5>
        </Col>
      </Form.Row>
      <Form.Row style={{textAlign:"center"}}>
        <Col>
        <Button onClick= {handleSubmit} block>Save</Button>
        </Col>
      </Form.Row>
    </Form>
    
  );
};

export default MyForm;
