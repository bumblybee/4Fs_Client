import EditableCell from "../components/cells/editable/EditableCell";
import EmptyRowCell from "../components/cells/empty/EmptyRowCell";
import DropdownCell from "../components/cells/dropdown/DropdownCell";
import ExampleRowCell from "../components/cells/example/ExampleRowCell";
import CheckboxCell from "../components/cells/checkbox/CheckboxCell";
import DatePickerCell from "../components/cells/date/DatePickerCell";
import TimePickerCell from "../components/cells/time/TimePickerCell";
import NumberCell from "../components/cells/number/NumberCell";
import ButtonCell from "../components/cells/button/ButtonCell";
import DeleteCell from "../components/cells/delete/DeleteCell";

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
          textweight={props.textWeight}
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
          aligntext={props.aligntext}
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
          val={props.val}
          performed={props.performed}
          label={props.label}
          accessor={props.accessor}
        />
      );
    case "number":
      return (
        <NumberCell
          id={props.id}
          onSave={props.onSave}
          val={props.val}
          label={props.label}
          accessor={props.accessor}
          alignment={props.alignment}
        />
      );
    case "date":
      return (
        <DatePickerCell
          id={props.id}
          onSave={props.onSave}
          label={props.label}
          accessor={props.accessor}
          width={props.width}
        />
      );
    case "time":
      return (
        <TimePickerCell
          id={props.id}
          onSave={props.onSave}
          label={props.label}
          accessor={props.accessor}
          width={props.width}
        />
      );
    case "button":
      return (
        <ButtonCell
          size={props.size}
          as="a"
          href={props.to}
          accessor={props.accessor}
          color={props.color}
          isCentered={props.isCentered}
          icon={props.icon}
          val={props.val}
        />
      );
    case "delete":
      return (
        <DeleteCell
          id={props.id}
          onDelete={props.onDelete}
          alignment={props.alignment}
        />
      );
    default:
      return <div style={props.style}>{props.val}</div>;
  }
};

export default generateCellComponent;
