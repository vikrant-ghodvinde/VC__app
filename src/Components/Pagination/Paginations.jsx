import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { Pagination } from "react-bootstrap";

const Paginations = () => {
  return (
    <div className="pagination__box--wrapper">
      <Pagination>
        <Pagination.Prev>
          <FeatherIcon icon="arrow-left" size={16} /> Previous
        </Pagination.Prev>
        <div className="Pagination__number--wrapper">
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{8}</Pagination.Item>
          <Pagination.Item>{9}</Pagination.Item>
          <Pagination.Item>{10}</Pagination.Item>
        </div>
        <Pagination.Next>
          Next <FeatherIcon icon="arrow-right" size={16} />
        </Pagination.Next>
      </Pagination>
    </div>
  );
};

export default Paginations;
