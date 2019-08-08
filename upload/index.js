const contentfulImport = require('contentful-import')
const exportFile = require('../dist/contexpo.json')

const options = {
  contentFile: 'dist/contexpo.json',
  spaceId: 'r7jwavdtoa14',
  managementToken: 'CFPAT-pmNDpMdkehHG6swF_6JpzYDsH9mOyQBM0ZD91893q2Q',
  environmentId: 'staging',
}

contentfulImport(options).then(() => {
	console.log('Data imported successfully')
})
.catch((err) => {
	console.log('Oh no! Some errors occurred!', err)
})
