import commonWidgetOptions from "./commonOptions";
const text = {
    name: "text",
    label: "Text",
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
  export default text