const widgets = Object.values(import.meta.glob(['./widgets/*', '!**/widgets/commonOptions.js'], {eager:true, import:'default'}))
import commonOptions from './commonCollectionOptions'

const collection = {
  name: "folder_collections",
  label: "Folder collections",
  label_singular: "collection",
  create: true,
  extension: "json",
  identifier_field: "name",
  summary: "{{label}}",
  folder: "config/collections/folder",
  editor: {
    preview: false
  },
  fields: [
  {
    name: "folder",
    widget: "string",
    required: true
  },
  ...commonOptions,
  {
    name: "create",
    widget: "boolean",
    default: false
  },
  {
    name: "delete",
    widget: "boolean",
    default: true
  },
  {
    name: "filter",
    widget: "object",
    collapsed: true,
    required: false,
    fields: [
      {
        name: "field",
        widget: "string",
        required: false
      },
      {
        name: "value",
        widget: "string",
        required: false
      }
    ],
    required: false
  },
  {
    name: "fields",
    label_singular: "field",
    widget: "list",
    add_to_top: false,
    type_key: "widget",
    types: widgets,
    required: true,
    collapsed: false
  }
  ]
}
export default collection
