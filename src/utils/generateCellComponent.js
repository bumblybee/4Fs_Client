import EditableCell from "../components/cells/EditableCell";
import EmptyRowCell from "../components/cells/EmptyRowCell";
import DropdownCell from "../components/cells/DropdownCell";
import ExampleRowCell from "../components/cells/ExampleRowCell";
import CheckboxCell from "../components/cells/checkbox/CheckboxCell";
import DatePickerCell from "../components/cells/DatePickerCell";
import NumberCell from "../components/cells/NumberCell";

const generateCellComponent = (type, props) => {
  switch (type) {
    case "editable":
      return (
        <EditableCell
          id={props.id}
          onSave={props.onSave}
          val={props.val}
          placeholder={props.placeholder}
          alignment={props.alignment}
          accessor={props.accessor}
        />
      );
    case "empty":
      return (
        <EmptyRowCell
          onSave={props.onSave}
          val=""
          placeholder={props.placeholder}
          alignment={props.alignment}
          accessor={props.accessor}
        />
      );
    case "dropdown":
      return (
        <DropdownCell
          id={props.id}
          onSave={props.onSave}
          label={props.label}
          options={props.options}
          defaultState={props.defaultState}
          accessor={props.accessor}
        />
      );
    case "check":
      return (
        <CheckboxCell
          id={props.id}
          onSave={props.onSave}
          label={props.label}
          accessor={props.accessor}
        />
      );
    case "number":
      return (
        <NumberCell
          id={props.id}
          onSave={props.onSave}
          label={props.label}
          accessor={props.accessor}
        />
      );
    case "date":
      return (
        <DatePickerCell
          id={props.id}
          onSave={props.onSave}
          label={props.label}
          accessor={props.accessor}
        />
      );
    default:
      return <div>{props.val}</div>;
  }
};

export default generateCellComponent;
