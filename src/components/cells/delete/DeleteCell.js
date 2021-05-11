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
        justifyContent: "flex-end",
        alignItems: "center",
        width: "min-content",
        marginLeft: "auto",
      }}
    >
      <Icon
        title="Delete"
        style={{ cursor: "pointer", color: "#C41E3Acc" }}
        name="trash"
        onClick={deleteData}
      />
    </div>
  );
};

export default DeleteCell;
