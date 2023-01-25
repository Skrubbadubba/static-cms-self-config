# Static-CMS Self Configuration

This is an example of how to make collections for [Static-CMS](https://github.com/StaticJsCMS/static-cms) (successor of [Netlify-CMS](https://github.com/netlify/netlify-cms)), that can edit the configuration options of the CMS. For now, this only works for projects using vite.

I came up with this idea partly because I wanted to contribute to the project, and since I'm not really a developer (but probably will be in the future), something of this caliber is about the best I can do. This is also to show how much power and customizability Static-CMS already have in terms of editing data, and that it's already at point where improving UI (and growing it's community) is more worthile than expanding it's already powerful toolkit.

Even if this is totally useless functionality to you, it provides a good template for structuring your config object with js modules, instead of a single `config.yml` file. This can be very useful for medium-large projects. I recommend this article: [DRY Netlify CMS config with Manual Initialization](https://mrkaluzny.com/blog/dry-netlify-cms-config-with-manual-initialization/) for more information.

# Usage

To get a feel for how things work, I suggest you clone this repo and try it out by running `npm i && npm run dev`. Then open a new terminal and run `npx @staticcms/proxy-server`.

If you just want to use it and don't need to mess around, download the repo as zip, and extract the config folder. Copy the folder into your project.

Inside the `config` folder there is a module (`config/config.js`). Import it, and pass it to `CMS.init({ config })`. Make sure that it will be bundled.

Inside `config/collections/metaCollection/`, there are two files, `collections.js` and `settings.js` representing the collections used for configuring. Inside them you will have to change the _folder_ and _file_ fields to the path to `config/collections/` and `config/settings.json` respectively, relative to your projects repository. This is most easily done by mutating the object properties before passing it to `CMS.init()`.

`admin/index.html`
```js
import config from './config/config.js'
config.collections.file_collections.folder = "src/cms/config/collections/file" //use your own path here
config.collections.folder_collections.folder = "src/cms/config/collections/folder" //use your own path here
console.log(config)
window.CMS.init({config});
```

The collections should now appear in the UI.

The **Settings** collection is quite straight forward. It contains all the settings for the apps configuration options, _besides_ the `collections` list.

The **Folder collections** collection is used to create and edit folder collections. 

The **File collections** is used to create and edit file collections. Each entry is a separate file collectino, which contains a list of files.

There is currently some weird behaviour, that makes objects widgets (and some list widgets) required. This is not a bug, however it is an opened issue labeled "enchancement", so it eventually be fixed. In the meantime, the fields of the affected objetcs all have to be marked as optional. The objects include "view_groups" and "view_filters". Consult the docs regarding which of their fields are required for their usage.


## Converting from yaml to js/json

If you already have a `config.yml` full of collections, but you want this is a template for migrating to js, there are multiple yaml to json converters you can use. Google "yaml to json converter" and pick one. Go into your `config.yml` and copy paste in each of your collections seperately (starting from "`-  name:`". For each json output, create a new file `<collection>.json` inside `config/collections`, and paste in the json.

# Screenshots
![image](https://user-images.githubusercontent.com/75796723/213933613-bb281f12-036b-4a41-bfb1-589687a25949.png)
![image](https://user-images.githubusercontent.com/75796723/213933652-8bf8916f-92d7-4b87-92e1-e1944f8dfe46.png)
![image](https://user-images.githubusercontent.com/75796723/213933664-d9c56828-76cb-4730-a6da-f7f0f91fa286.png)

