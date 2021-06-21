import React from "react";
import { Button } from "semantic-ui-react";
import { StyledDeleteMenu } from "./StyledDeleteCell";

const DeleteMenu = ({
  toDelete,
  setToDelete,
  deleteData,
  className,
  highlightRow,
}) => {
  return (
    <StyledDeleteMenu className={className}>
      <Button size="mini" onClick={deleteData} color="red">
        Delete
      </Button>
      <Button
        size="mini"
        basic
        color="purple"
        onClick={() => {
          setToDelete(!toDelete);
          highlightRow(null);
        }}
      >
        Cancel
      </Button>
    </StyledDeleteMenu>
  );
};

export default DeleteMenu;
