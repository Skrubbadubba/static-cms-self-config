const widgets = Object.values(import.meta.glob(['./widgets/*', '!**/widgets/commonOptions.js'], {eager:true, import:'default'}))
import commonOptions from './commonCollectionOptions'

const collection = {
    name: "file_collections",
    label: "File collections",
    labe_singular: "collection",
    extension: "json",
    create: true,
    folder: "config/collections/file",
    editor: {
        preview: false
    },
    fields: [
        {
            name: "files",
            widget: "list",
            required: true,
            fields: [
                {
                    name: "file",
                    widget: "string"
                },
                ...commonOptions,
                {
                    name: "fields",
                    label_singular: "field",
                    widget: "list",
                    add_to_top: true,
                    type_key: "widget",
                    summary: "{{types.fields.name}}",
                    types: widgets,
                    required: false,
                    collapsed: false
                }
            ]
        },
        ...commonOptions
    ]
}
export default collection