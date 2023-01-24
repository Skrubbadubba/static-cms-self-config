import commonWidgetOptions from "./commonOptions";
const select =
    {
        name: "select",
        label: "Select",
        widget: "object",
        fields: [
        ...commonWidgetOptions,
          {
            name: "options",
            widget: "list",
            fields: [
              {
                name: "label",
                widget: "string"
              },
              {
                name: "value",
                widget: "string"
              }
            ]
          },
          {
            name: "default",
            widget: "string",
            required: false
          },
          {
            name: "multiple",
            widget: "boolean",
            default: false
          },
          {
            name: "min",
            widget: "number",
            required: false
          },
          {
            name: "max",
            widget: "number",
            required: false
          }
        ]
      }
export default select