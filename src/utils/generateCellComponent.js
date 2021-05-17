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
import StaticCell from "../components/cells/static/StaticCell";

const generateCellComponent = (type, props) => {
  switch (type) {
    case "editable":
      return (
        <EditableCell
          id={props.id}
          onSave={props.onSave}
          onDelete={props.onDelete}
          val={props.val}
          placeholder={props.placeholder}
          alignment={props.alignment}
          aligntext={props.aligntext}
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
          disabled={props.disabled}
        />
      );
    case "example":
      return (
        <ExampleRowCell
          val={props.val}
          alignment={props.alignment}
          justify={props.justify}
          width={props.width}
          color={props.color}
          textWeight={props.textweight}
          tooltipContent={props.tooltipContent}
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
          disabled={props.disabled}
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
          disabled={props.disabled}
        />
      );
    case "date":
      return (
        <DatePickerCell
          id={props.id}
          className={props.className}
          onSave={props.onSave}
          label={props.label}
          val={props.val}
          accessor={props.accessor}
          label={props.label}
          width={props.width}
          alignment={props.alignment}
          justify={props.justify}
        />
      );
    case "time":
      return (
        <TimePickerCell
          id={props.id}
          onSave={props.onSave}
          val={props.val}
          label={props.label}
          className={props.className}
          accessor={props.accessor}
          width={props.width}
          sleepHours={props.sleepHours}
        />
      );
    case "button":
      return (
        <ButtonCell
          size={props.size}
          as="a"
          to={props.to}
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
          collapsing={props.collapsing}
        />
      );
    case "static":
      return (
        <StaticCell
          val={props.val}
          condition={props.condition}
          className={props.className}
          aligntext={props.aligntext}
          alignment={props.alignment}
          textweight={props.textweight}
        />
      );
    default:
      return <div style={props.style}>{props.val}</div>;
  }
};

export default generateCellComponent;
