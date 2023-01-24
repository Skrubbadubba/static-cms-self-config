import commonWidgetOptions from "./commonOptions"
const relation =
    {
      name: "relation",
      label: "Relation",
      widget: "object",
      fields: [
        ...commonWidgetOptions,
        {
          name: "collection",
          widget: "string"
        },
        {
          name: "value_field",
          widget: "string"
        },
        {
          name: "search_fields",
          widget: "string"
        },
        {
          name: "default",
          widget: "string",
          required: false
        },
        {
          name: "file",
          widget: "string",
          required: false
        },
        {
          name: "display_fields",
          widget: "list",
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
        },
        {
          name: "options_lenght",
          widget: "number",
          default: 20
        }
      ]
    }
export default relation