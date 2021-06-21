import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import DeleteMenu from "./DeleteMenu";
import { StyledDeleteCell } from "./StyledDeleteCell";

const DeleteCell = (props) => {
  const [toDelete, setToDelete] = useState(false);

  const deleteData = () => {
    props.onDelete(props.id);
    setToDelete(!toDelete);
    props.highlightRow(null);
  };

  return (
    <StyledDeleteCell className={`delete ${props.className}`}>
      {toDelete && (
        <DeleteMenu
          className={props.className}
          toDelete={toDelete}
          setToDelete={setToDelete}
          deleteData={deleteData}
          highlightRow={props.highlightRow}
        />
      )}

      <div
        className="delete-wrapper"
        onClick={() => {
          setToDelete(!toDelete);
          props.highlightRow(props.id);
        }}
      >
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
