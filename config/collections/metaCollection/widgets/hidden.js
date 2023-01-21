import commonWidgetOptions from './commonOptions'
const hidden = {
    name: "hidden",
    label: "Hidden",
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
export default hidden