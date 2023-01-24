const folder_collections = Object.values(import.meta.glob(['./collections/folder/*.json'], {eager: true, import: 'default'}))
const file_collections = Object.values(import.meta.glob(['./collections/file/*.json'], {eager: true, import: 'default'}))
import metaSettings from './collections/metaCollections/settings'
import metaFolderCollections from './collections/metaCollections/folderCollections'
import metaFileCollections from './collections/metaCollections/fileCollections'
// collections.push(metaSettings)
import settings from './settings.json'
// console.log(settings)
const config = {
    ...settings,
    collections: [
        ...folder_collections,
        ...file_collections,
        metaSettings,
        metaFileCollections,
        metaFolderCollections
    ]
}
export default config