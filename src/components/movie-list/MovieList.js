import React from "react";
import { CustomCard } from "../card/CustomCard";
import { Button, ButtonGroup, Row, Col } from "react-bootstrap";

export const MovieList = ({ movieList, handleOnDelete, handleOnSelect}) => {
  return (
    <Row>
      <Col>
        <div className="filter d-flex justify-content-between">
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="secondary" onClick={() =>handleOnSelect()}>All</Button>
            <Button variant="secondary" onClick={() =>handleOnSelect("happy")}>Happy</Button>
            <Button variant="secondary" onClick={() =>handleOnSelect("lazy")}>Lazy</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="secondary">Grid</Button>
            <Button variant="secondary">List</Button>
          </ButtonGroup>
        </div>

        <div className="row mt-5">
          {/* <div className="d-flex justify-content-between flex-wrap mt-5" gap={6}> */}
          {movieList.map((movie, i) => {
            return <CustomCard key={i} movie={movie} btnDelete= {true} fun ={handleOnDelete} />;
          })}
        </div>
      </Col>
    </Row>
  );
};
