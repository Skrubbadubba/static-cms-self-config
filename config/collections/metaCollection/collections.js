const widgets = Object.values(import.meta.glob(['./widgets/*', '!**/widgets/commonOptions.js'], {eager:true, import:'default'}))
const metaCollectionsGeneralFields = [
  {
    name: "name",
    widget: "string"
  },
  {
    name: "label",
    widget: "string"
  },
  {
    name: "identifier_field",
    widget: "string",
    required: false
  },
  {
    name: "label_singular",
    widget: "string",
    required: false
  },
  {
    name: "slug",
    widget: "string",
    required: false
  },

  {
    name: "editor",
    widget: "object",
    required: false,
    collapsed: true,
    fields: [
      {
        name: "preview",
        widget: "boolean",
        default: true
      },
      {
        name: "frame",
        widget: "boolean",
        default: false
      }
    ]
  },
  {
    name: "summary",
    widget: "string",
    required: false
  },
  {
    name: "hide",
    widget: "boolean"
  },
  {
    name: "icon",
    widget: "string",
    required: false
  },
  {
    name: "description",
    widget: "string",
    required: false
  },
  {
    name: "extension",
    widget: "string",
    required: false
  },
  {
    name: "format",
    widget: "select",
    options: [
      "yml",
      "json",
      "frontmatter",
      "yaml-frontmatter",
      "json-frontmatter"
    ],
    required: false
  },
  {
    name: "frontmatter_delimiter",
    widget: "list",
    fields: [
      {
        name: "delimiter",
        widget: "string"
      }
    ],
    required: false
  },
  {
    name: "sortable_fields",
    widget: "object",
    collapsed: false,
    fields: [
      {
        name: "fields",
        widget: "list",
        fields: [
          {
            name: "string",
            widget: "string"
          }
        ]
      },
      {
        name: "default",
        widget: "object",
        fields: [
          {
            name: "field",
            widget: "string"
          },
          {
            name: "direction",
            widget: "select",
            options: [
              "Ascending",
              "Descending",
              "none"
            ]
          }
        ]
      }
    ],
    required: false
  },
  {
    name: "view_filters",
    widget: "list",
    collapsed: false,
    fields: [
      {
        name: "label",
        widget: "string"
      },
      {
        name: "field",
        widget: "author"
      },
      {
        name: "pattern",
        widget: "string"
      }
    ],
    required: false
  },
  {
    name: "view_groups",
    widget: "list",
    required: false,
    collapsed: false,
    fields: [
      {
        name: "label",
        widget: "string"
      },
      {
        name: "field",
        widget: "author"
      },
      {
        name: "pattern",
        widget: "string",
        required: false
      }
    ]
  },
  {
    name: "fields",
    label_singular: "field",
    widget: "list",
    add_to_top: false,
    type_key: "widget",
    summary: "name",
    types: widgets,
    required: false
  }
]

const metaCollections = {
  name: "collections",
  label: "Collections",
  label_singular: "collection",
  create: true,
  extension: "json",
  identifier_field: "name",
  view_filters: [
    {
      label: "Folder collections",
      field: "folder",
      pattern: "."
    },
    {
      label: "File collections",
      field: "files",
      pattern: "."
    }
  ],
  summary: "{{label}}",
  folder: "config/collections",
  fields: [
  {
    name: "files",
    widget: "list",
    add_on_top: true,
    min: 0,
    fields: [
      {
        name: "file",
        widget: "string"
      },
      ...metaCollectionsGeneralFields],
    required: false
  },
  {
    name: "folder",
    widget: "string",
    required: false
  },
  ...metaCollectionsGeneralFields,
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
    fields: [
      {
        name: "field",
        widget: "string"
      },
      {
        name: "value",
        widget: "string"
      }
    ],
    required: false
  }
  ]
}
export default metaCollections
