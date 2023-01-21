import commonWidgetOptions from "./commonOptions";
const number = {
    name: 'number',
    label: 'Number',
    widget: 'object',
    fields: [
        ...commonWidgetOptions,
        {
            name: 'default',
            widget: 'number'
        },
        {
            name: "value_type",
            widget: "select",
            options: [
              "int",
              "float"
            ],
            required: false
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
        name: "step",
        widget: "number",
        default: 1
        }
    ]
}
export default number