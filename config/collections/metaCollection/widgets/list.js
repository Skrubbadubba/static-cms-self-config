import commonWidgetOptions from './commonOptions'
const otherWidgets = Object.values(import.meta.glob(['./*', '!**/object.js'], {eager: true, import: 'default'}))
export let unNestedList = {
    name: "list",
    label: "List",
    widget: "object",
    fields: [
      ...commonWidgetOptions,
      {
        name: "default",
        widget: "string",
        required: false
      },
      {
        name: "allow_add",
        widget: "boolean",
        default: true
      },
      {
        name: "collapsed",
        widget: "boolean",
        default: true
      },
      {
        name: "summary",
        widget: "string",
        required: true
      },
      {
        name: "labe_singular",
        widget: "string",
        required: false
      },
      {
        name: "fields",
        widget: "list",
        required: false,
        types: [
          ...otherWidgets
        ]
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
        name: "add_to_top",
        widget: "boolean",
        default: false
      },
      {
        name: "types",
        widget: "list",
        required: false,
        types: [
          ...otherWidgets
        ]
      },
      {
        name: "type_key",
        widget: "string",
        required: false
      }
    ]
  };
let list = JSON.parse(JSON.stringify(unNestedList));
list.fields.find(field => field.name === "fields").types.push(unNestedList);
list.fields.find(field => field.name === "types").types.push(unNestedList);
export { list as default}