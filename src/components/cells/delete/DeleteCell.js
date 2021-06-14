import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import DeleteMenu from "./DeleteMenu";
import { StyledDeleteCell } from "./StyledDeleteCell";

const DeleteCell = (props) => {
  const [toDelete, setToDelete] = useState(false);

  const deleteData = () => {
    props.onDelete(props.id);
    setToDelete(!toDelete);
  };

  return (
    <StyledDeleteCell className="delete">
      {toDelete && (
        <DeleteMenu
          toDelete={toDelete}
          setToDelete={setToDelete}
          deleteData={deleteData}
        />
      )}
      <Icon
        title="Delete"
        name="delete"
        onClick={() => setToDelete(!toDelete)}
        color="red"
      />
    </StyledDeleteCell>
  );
};

export default DeleteCell;
