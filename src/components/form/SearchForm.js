import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export const SearchForm = ({ handleOnSubmit, handleOnChange, value }) => {

  // const handleOnChange = e =>{
  //   const { value} = e.target;
  //   setSearch(value);
  // }


  return (
    <Form onSubmit={handleOnSubmit}>
      <Row>
        <Col className="d-flex justify-content-center mb-5">
          <Form.Control
            placeholder="Search"
            className="mr3" value={value}
            onChange={handleOnChange}
            required
          />

          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
