const collections = Object.values(import.meta.glob(['./collections/*.json'], {eager: true, import: 'default'}))
import metaSettings from './collections/metaCollection/settings'
import metaCollections from './collections/metaCollection/collections'
// collections.push(metaSettings)
import settings from './settings.json'
// console.log(settings)
const config = {
    ...settings,
    collections: [
        ...collections,
        metaSettings,
        metaCollections
    ]
}
export default config