import commonWidgetOptions from './commonOptions'
const boolean = {
    name: "boolean",
    label: "Boolean",
    widget: "object",
    fields: [
      ...commonWidgetOptions,
      {
        name: "default",
        widget: "boolean"
      }
    ]
  }
export default boolean