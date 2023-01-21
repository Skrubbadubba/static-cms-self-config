import commonWidgetOptions from './commonOptions'
const file = {
    name: "file",
    label: "File",
    widget: "object",
    fields: [
      ...commonWidgetOptions,
      {
        name: "default",
        widget: "string",
        required: false
      },
      {
        name: "media_library",
        required: false,
        widget: "object",
        fields: [
          {
            name: "allow_multiple",
            widget: "boolean",
            default: true
          },
          {
            name: "choose_url",
            widget: "boolean",
            default: true
          }
        ]
      },
      {
        name: "media_folder",
        widget: "string",
        required: false
      },
      {
        name: "public_folder",
        widget: "string",
        required: false
      }
    ]
  }
export default file