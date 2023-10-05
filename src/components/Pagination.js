import React from "react";

const Pagination = ({ currentPage, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul style={{ listStyle: "none", display: "flex", gap: "6px" }}>
      <li
        onClick={onPrevious}
        style={{ border: "2px solid red", padding: "4px", borderRadius: "5px" }}
      >
        Prev
      </li>
      {pages.map((page) => (
        <li
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            width: "25px",
            height: "25px",
            border: "2px solid red",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {page}
        </li>
      ))}
      <li
        onClick={onNext}
        style={{ border: "2px solid red", padding: "4px", borderRadius: "5px" }}
      >
        Next
      </li>
    </ul>
  );
};

export default Pagination;
