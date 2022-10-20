import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Header = () => {
  return (
    <Row>
      <Col sm="12" className="text-center justify-content-center">
        <div className=" title">قائمة الطعام</div>
        <div className="justify-content-center d-flex">
          <p className="underline"></p>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
