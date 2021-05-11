import React, { useState } from "react";
import { Icon, Button } from "semantic-ui-react";

const DeleteCell = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteData = () => {
    setIsDeleted(true);
    props.onDelete(props.id);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
      }}
    >
      <Button size="mini" icon onClick={deleteData}>
        <Icon name="trash" />
      </Button>
    </div>
  );
};

export default DeleteCell;
