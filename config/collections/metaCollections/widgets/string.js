import commonWidgetOptions from "./commonOptions";
const string = {
    name: "string",
    label: "String",
    widget: "object",
    fields: [
        ...commonWidgetOptions,
      {
        name: "default",
        widget: "string",
        required: false
      }
    ]
  }
export default string