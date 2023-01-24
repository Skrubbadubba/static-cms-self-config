import commonWidgetOptions from './commonOptions'
const otherWidgets =  Object.values(import.meta.glob(['./*', '!**/list.js'], {eager: true, import: 'default'}))
import {unNestedList} from './list.js'
const unNestedObject = {
    name: "object",
    label: "Object",
    widget: "object",
    fields: [
      ...commonWidgetOptions,
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
        name: "fields",
        widget: "list",
        required: false,
        types: [
          ...otherWidgets,
          unNestedList
        ]
      },
    ]
  }
let object = JSON.parse(JSON.stringify(unNestedObject))
object.fields.find(field => field.name === "fields").types.push(unNestedObject)
export default object