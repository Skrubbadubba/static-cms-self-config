import commonWidgetOptions from './commonOptions'
const map = {
    name: "map",
    label: "Map",
    widget: "object",
    fields: [
      ...commonWidgetOptions,
      {
        name: "default",
        widget: "string",
        required: false
      },
      {
        name: "decimals",
        widget: "number",
        default: 7,
        required: false
      },
      {
        name: "type",
        widget: "select",
        options: [
          "Point",
          "LineString",
          "Polygon"
        ],
        default: "Point",
        required: false
      },
      {
        name: "height",
        widget: "string",
        required: false,
        default: "400px"
      }
    ]
  }
export default map