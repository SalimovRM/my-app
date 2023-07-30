import React from "react";

export default function Paging({ currentPage, totalPages, setCurrentPage }) {
  // const [label, setLabel]= React.useState()
  let label = currentPage === totalPages ? "Previous" : "Next";

  const onClickHandler = () => {
    let newPage;

    if (currentPage === totalPages) {
      newPage = currentPage - 1;
    } else {
      newPage = currentPage + 1;
    }
    setCurrentPage(newPage);
    console.log(newPage);
  };

  return (
    <div>
      <button onClick={onClickHandler}>{label}</button>
    </div>
  );
}
