import React, { useState } from "react";
import { Icon, Button } from "semantic-ui-react";

const DeleteCell = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteData = () => {
    props.onDelete(props.id);
    setIsDeleted(!isDeleted);
  };

  const renderMenu = () => (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        background: "#fff",
        padding: "1rem",
        zIndex: 500,
        display: "flex",
        border: "1px solid #eee",
        borderRadius: "6px",
        boxShadow: "0 0 4px rgba(0,0,0,0.09)",
      }}
    >
      <Button size="mini" basic onClick={() => setIsDeleted(!isDeleted)}>
        Cancel
      </Button>
      <Button
        size="mini"
        onClick={deleteData}
        style={{ background: "#C41E3Aee", color: "#fff" }}
      >
        Delete
      </Button>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        marginLeft: "auto",
        position: "relative",
      }}
    >
      {isDeleted && renderMenu()}
      <Icon
        title="Delete"
        style={{ cursor: "pointer", color: "#C41E3Abb" }}
        name="delete"
        onClick={() => setIsDeleted(!isDeleted)}
      />
    </div>
  );
};

export default DeleteCell;
