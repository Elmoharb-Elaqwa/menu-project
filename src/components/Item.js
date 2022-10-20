import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const Item = (props) => {
  const { items } = props;
  return (
    <Row>
      <Zoom>
        {items.length >= 1 ? (
          items.map((item) => {
            return (
              <Col key={item.id} sm="12" className="mb-3">
                <Card
                  className="d-flex flex-row"
                  style={{ backgroundColor: '#f8f8f8' }}
                >
                  <Card.Img
                    variant="top"
                    style={{
                      width: '252px',
                      height: '180px',
                      borderRadius: '5px',
                    }}
                    src={item.img}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between ">
                      <div className="item-title"> {item.title}</div>
                      <div className="item-price"> {item.price} </div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <div className="item-description ">
                        {item.description}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h3 style={{ textAlign: 'center' }}>لا يوجد اصناف</h3>
        )}
      </Zoom>
    </Row>
  );
};

export default Item;
