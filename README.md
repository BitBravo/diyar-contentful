# Diyar Al Muharraq exporter
Export diyar contentful content into markdown/PDF.

### Requirements

*  [Node.js](http://nodejs.org): v10.x.
*  [Contentful](https://www.contentful.com/): Credentials for contentful diyar account.

### Features

* Console utility which exports all Diyar content into .docx document (excluding images and similar assets).
* As intermedite step, between contentful content and .docx, utility will generate equivalent markdown document.

### How to proceed
1.  Clone.
2.  Run: `npm i` to install the dependencies
2.  Avail contenful credentials which allow access to Diyar content.
3.  Install [contentful CLI](https://github.com/contentful/contentful-cli). This will run as CLI tool.
4.  Install [Pandoc](https://pandoc.org/): universal document converter (this will convert markdown to .docx).
5.  Invoke `contentful login` from console. This will open browser asking for contentful credentials to be used.
6.  Browser will reply with contentful access token. Make note of it.
7.  Setup $COTOKEN environment variable being equal to contentful access token from previous point.
8.  Run: `npm run all`. This will:
*   Fetch content from contentful as ./dist/contextpo.json,
*   Parse content into markdown (./dist/output.md),
*   Apply pandoc to generate .docx from markdown (see previous).
9.  Tweak code or npm scripts if required.
10.  Make coffee, listen to music and generally be happy.

