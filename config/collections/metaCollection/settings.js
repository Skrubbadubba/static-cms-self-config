const meta = {
    name: "settings",
    label: "Settings",
    files: [
      {
        name: "settings",
        label: 'Settings',
        file: "config/settings.json",
        fields: [
          {
            name: "backend",
            widget: "object",
            collapsed: true,
            fields: [
              {
                name: "name",
                widget: "select",
                options: [
                  "git-gateway",
                  "github",
                  "gitlab",
                  "bitbucket",
                  "gitea",
                  "test-repo",
                  "proxy"
                ]
              },
              {
                name: "repo",
                widget: "string",
                required: false
              },
              {
                name: "branch",
                widget: "string",
                required: false
              },
              {
                name: "api_root",
                widget: "string",
                required: false
              },
              {
                name: "site_domain",
                widget: "string",
                reauired: false
              },
              {
                name: "base_url",
                widget: "string",
                required: false
              },
              {
                name: "auth_endpoint",
                widget: "string",
                required: false
              }
            ]
          },
          {
            name: "local_backend",
            widget: "boolean",
            default: false
          },
          {
            name: "media_folder",
            widget: "string"
          },
          {
            name: "public_folder",
            widget: "string",
            required: false
          },
          {
            name: "site_url",
            widget: "string",
            required: false
          },
          {
            name: "display_url",
            widget: "string",
            required: false
          },
          {
            name: "logo_url",
            widget: "string",
            required: false
          },
          {
            name: "locale",
            widget: "string",
            required: false
          },
          {
            name: "search",
            widget: "boolean",
            default: true
          },
          {
            name: "slug",
            widget: "object",
            required: false,
            collapes: true,
            fields: [
              {
                name: "encoding",
                widget: "select",
                options: [
                  "unicode",
                  "ascii"
                ]
              },
              {
                name: "clean_accents",
                widget: "boolean",
                default: false
              },
              {
                name: "sanitize_replacements",
                widget: "string",
                default: "_"
              }
            ]
          }
        ]
      }
    ]
  }
  export default meta