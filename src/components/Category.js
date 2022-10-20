import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Roll from 'react-reveal/Roll';

const Category = (props) => {
  const { filterFoodList, categoryList } = props;
  const onFilter = (cat) => {
    filterFoodList(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <Roll left>
          {categoryList.length >= 1 ? (
            categoryList.map((cat) => {
              return (
                <div key={Math.random()}>
                  <button
                    className=" btn1  mx-2"
                    style={{ border: '1px solid #b45b35' }}
                    onClick={() => {
                      onFilter(cat);
                    }}
                  >
                  </button>
                </div>
              );
            })
          ) : (
            <h2>لا توجد تصنيفات</h2>
          )}
        </Roll>
      </Col>
    </Row>
  );
};

export default Category;
