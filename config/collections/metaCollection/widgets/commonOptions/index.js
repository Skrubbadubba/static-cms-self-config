const commonWidgetOptions = [
    {
        name: "name",
        widget: "string"
      },
      {
        name: "label",
        widget: "string",
        required: false
      },
      {
        name: "required",
        widget: "boolean",
        default: true
      },
      {
        name: "hint",
        widget: "text",
        required: false
      },
      {
        name: "pattern",
        widget: "string",
        required: false
      },
      {
        name: "188n",
        required: false,
        widget: "select",
        options: [
          "true",
          "none",
          "translate",
          "duplicate"
        ]
      },
      {
        name: "comment",
        widget: "string",
        required: false
      }
];
export default commonWidgetOptions