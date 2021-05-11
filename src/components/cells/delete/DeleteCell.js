import React, { useState } from "react";
import { Icon, Button } from "semantic-ui-react";

const DeleteCell = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteData = () => {
    setIsDeleted(true);
    if (window.confirm("Are you sure you want to delete this entry?"))
      props.onDelete(props.id);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: "auto",
      }}
    >
      <Icon
        title="Delete"
        style={{ cursor: "pointer", color: "#C41E3Abb" }}
        name="delete"
        onClick={deleteData}
      />
    </div>
  );
};

export default DeleteCell;
