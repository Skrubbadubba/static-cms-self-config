import commonWidgetOptions from './commonOptions'
const color = {
    name: "color",
    label: "Color",
    widget: "object",
    fields: [
      ...commonWidgetOptions,
      {
        name: "default",
        widget: "color"
      },
      {
        name: "allow_input",
        widget: "boolean",
        default: false
      },
      {
        name: "enable_alpha",
        widget: "boolean",
        default: false
      }
    ]
  }
export default color