import React from "react";
import { Button } from "semantic-ui-react";
import { StyledDeleteMenu } from "./StyledDeleteCell";

const DeleteMenu = ({ toDelete, setToDelete, deleteData }) => {
  return (
    <StyledDeleteMenu>
      <Button
        size="mini"
        onClick={deleteData}
        style={{ background: "#c41e3a99", color: "#fff" }}
      >
        Delete
      </Button>
      <Button
        size="mini"
        basic
        color="teal"
        onClick={() => setToDelete(!toDelete)}
      >
        Cancel
      </Button>
    </StyledDeleteMenu>
  );
};

export default DeleteMenu;
