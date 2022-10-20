import React, { useState } from 'react';
import { Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
const NavBar = (props) => {
  const [word, setWord] = useState('');
  const { filterBySearch } = props;
  const filterFood = (e) => {
    e.preventDefault();
    filterBySearch(word);
    setWord('');
  };

  return (
    <Row>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="ابحث .."
                className="mx-2"
                onChange={(e) => {
                  setWord(e.target.value);
                }}
                value={word}
              />
              <button
                className="btn-search"
                onClick={(e) => {
                  filterFood(e);
                }}
              >
                ابحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
