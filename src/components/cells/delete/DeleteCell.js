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
    <StyledDeleteCell className={`delete ${props.className}`}>
      {toDelete && (
        <DeleteMenu
          className={props.className}
          toDelete={toDelete}
          setToDelete={setToDelete}
          deleteData={deleteData}
        />
      )}

      <div className="delete-wrapper" onClick={() => setToDelete(!toDelete)}>
        <Icon
          className={props.className}
          title="Delete"
          name="delete"
          color="red"
        />
        <span className={props.className}>Delete</span>
      </div>
    </StyledDeleteCell>
  );
};

export default DeleteCell;
