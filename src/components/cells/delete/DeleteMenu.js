import React from "react";
import { Button } from "semantic-ui-react";
import { StyledDeleteMenu } from "./StyledDeleteCell";

const DeleteMenu = ({ toDelete, setToDelete, deleteData }) => {
  return (
    <StyledDeleteMenu>
      <Button size="mini" basic onClick={() => setToDelete(!toDelete)}>
        Cancel
      </Button>
      <Button
        size="mini"
        onClick={deleteData}
        style={{ background: "#C41E3Aee", color: "#fff" }}
      >
        Delete
      </Button>
    </StyledDeleteMenu>
  );
};

export default DeleteMenu;
