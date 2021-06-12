import DOMPurify from "dompurify";
import EditableCell from "../components/cells/editable/EditableCell";
import EmptyCell from "../components/cells/empty/EmptyCell";
import DropdownCell from "../components/cells/dropdown/DropdownCell";
import ExampleCell from "../components/cells/example/ExampleCell";
import CheckboxCell from "../components/cells/checkbox/CheckboxCell";
import DatePickerCell from "../components/cells/date/DatePickerCell";
import TimePickerCell from "../components/cells/time/TimePickerCell";
import NumberCell from "../components/cells/number/NumberCell";
import ButtonCell from "../components/cells/button/ButtonCell";
import DeleteCell from "../components/cells/delete/DeleteCell";
import StaticCell from "../components/cells/static/StaticCell";
import LabelCell from "../components/cells/label/LabelCell";
import ProgressCell from "../components/cells/progress/ProgressCell";

const generateCellComponent = (type, props) => {
  const sanitize = DOMPurify.sanitize;

  switch (type) {
    case "editable":
      return (
        <EditableCell
          id={props.id}
          first={props.first}
          onSave={props.onSave}
          onDelete={props.onDelete}
          val={props.val}
          placeholder={props.placeholder}
          alignment={props.alignment}
          aligntext={props.aligntext}
          textweight={props.textWeight}
          accessor={props.accessor}
          foreignAccessor={props.foreignAccessor}
          foreignId={props.foreignId}
          disabled={props.disabled}
        />
      );
    case "empty":
      return (
        <EmptyCell
          onSave={props.onSave}
          val=""
          placeholder={props.placeholder}
          alignment={props.alignment}
          aligntext={props.aligntext}
          accessor={props.accessor}
          foreignAccessor={props.foreignAccessor}
          foreignId={props.foreignId}
          disabled={props.disabled}
        />
      );
    case "example":
      return (
        <ExampleCell
          val={props.val}
          alignment={props.alignment}
          justify={props.justify}
          width={props.width}
          color={props.color}
          textWeight={props.textweight}
          tooltipContent={props.tooltipContent}
          className={props.className}
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
          foreignAccessor={props.foreignAccessor}
          foreignId={props.foreignId}
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
          foreignAccessor={props.foreignAccessor}
          foreignId={props.foreignId}
          alignment={props.alignment}
          disabled={props.disabled}
        />
      );
    case "date":
      return (
        <DatePickerCell
          id={props.id}
          className={props.className}
          updateRow={props.updateRow}
          val={props.val}
          onSave={props.onSave}
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
          updateRow={props.updateRow}
          onSave={props.onSave}
          val={props.val}
          item={props.item}
          className={props.className}
          accessor={props.accessor}
          width={props.width}
          hoursSlept={props.hoursSlept}
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
          newWindow={props.newWindow}
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
    case "label":
      return (
        <LabelCell
          val={props.val}
          condition={props.condition}
          className={props.className}
          color={props.color}
        />
      );
    case "progress":
      return (
        <ProgressCell
          val={props.val}
          day={props.day}
          goal={props.goal}
          className={props.className}
        />
      );

    default:
      return (
        <div style={props.style}>{sanitize(props.val) || props.component}</div>
      );
  }
};

export default generateCellComponent;
