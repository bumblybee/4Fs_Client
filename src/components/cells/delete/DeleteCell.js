import React, { useState } from "react";
import { Icon, Button } from "semantic-ui-react";

const DeleteCell = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteData = () => {
    setIsDeleted(true);
    props.onDelete(props.id);
  };

  return (
    <Button size="mini" icon onClick={deleteData}>
      <Icon name="trash" />
    </Button>
  );
};

export default DeleteCell;
