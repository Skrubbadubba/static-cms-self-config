import commonWidgetOptions from './commonOptions'
const datetime = {
    name: "datetime",
    label: "DateTime",
    widget: "object",
    fields: [
      ...commonWidgetOptions,
      {
        name: "default",
        widget: "string",
        required: false
      },
      {
        name: "format",
        widget: "string",
        required: false
      },
      {
        name: "date_format",
        widget: "string",
        required: false
      },
      {
        name: "time_format",
        widget: "string",
        required: false
      },
      {
        name: "picker_utc",
        widget: "boolean",
        default: false
      }
    ]
  }
export default datetime