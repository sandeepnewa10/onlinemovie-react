import React from "react";
import { Card, Button, Col } from "react-bootstrap";

export const CustomCard = ({ movie, fun, btnDelete }) => {
  return (
    <Col sm="12" md="6" lg="4" xl="3">
      <Card className="mb-4">
        <Card.Img variant="top" src={movie?.Poster} />
        <Card.Body>
          <Card.Title>{movie?.Title}</Card.Title>
          <Card.Title>{movie?.imdbRating}</Card.Title>
          <Card.Text>
            {/* <span>Director {movie?.imdbRating}</span>
            <span></span> */}
          </Card.Text>

          {btnDelete ? (
            <div className="d-grid gap-2">
              {/* <Button variant="danger" size="lg"</Button> */}

              <button onClick={() => fun(movie.imdbID)}>
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Delete</span>
              </button>
            </div>
          ) : (
            <div className="d-flex justify-content-between">
              <Button className="btn_like" onClick={() => fun("happy", movie)}>
                <i className="fa-regular fa-heart"></i>
              </Button>
              <Button
                className="btn_dislike"
                onClick={() => fun("lazy", movie)}
              >
                <i className="fa-regular fa-thumbs-down"></i>
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};
