const contentfulExport = require('contentful-export')

require('dotenv').config({
  path: `.env`,
});

const options = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  managementToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environmentId: process.env.NODE_ENV,
  contentFile: `dist/contexpo-${process.env.NODE_ENV}.json`,
  errorLogFile: `Log/error-export-${process.env.NODE_ENV}.json`,
  includeDrafts: true,
  includeArchived: true,
  // queryEntries: [
  //   'content_type=<content_type_id>',
  //   'sys.id=<entry_id>',
  // ],
  // queryAssets: [],
  // skipContentModel
  // skipContent
  // skipRoles
  // skipWebhooks
  // contentOnly
  // useVerboseRenderer
}

contentfulExport(options)
.then((result) => {
  console.log(`Stored your ${process.env.NODE_ENV} contents`)
})
.catch((err) => {
  console.log('Oh no! Some errors occurred!', err)
})
