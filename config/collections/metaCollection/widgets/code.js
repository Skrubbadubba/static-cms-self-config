import commonWidgetOptions from './commonOptions'
import string from './string'
const code ={
    name: "code",
    label: "Code",
    widget: "object",
    fields: [
      ...commonWidgetOptions,
      {
        name: "default_language",
        widget: "string"
      },
      {
        name: "allow_language_selection",
        widget: "boolean",
        default: false
      },
      {
        name: "keys",
        widget: "object",
        required: false,
        fields: [
          {
            name: "code",
            widget: "string",
            default: "code"
          },
          {
            name: "lang",
            widget: "string",
            default: "lang"
          }
        ]
      },
      {
        name: "output_code_only",
        widget: "boolean",
        default: true
      }
    ]
  }
export default code