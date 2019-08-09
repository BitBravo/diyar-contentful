const contentfulImport = require('contentful-import')

require('dotenv').config({
  path: `.env`,
});

const options = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  managementToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environmentId: process.env.NODE_ENV,
  contentFile: `dist/contexpo-${process.env.NODE_ENV}.json`,
  errorLogFile: `Log/error-import$-${process.env.NODE_ENV}.json`,
  // contentModelOnly,
  // skipContentModel,
  // skipLocales,
  // skipContentPublishing
}

contentfulImport(options).then(() => {
	console.log(`Data imported to ${process.env.NODE_ENV}`)
})
.catch((err) => {
	console.log('Oh no! Some errors occurred!', err)
})
