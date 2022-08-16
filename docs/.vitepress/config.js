/**
 * @type {import("vitepress").UserConfig}
 */
const config = {
  "title": "CH Guide",
  "description": "Unofficial Companies House developer guide",
  "outDir": "../build",
  "lang": "en-GB",
  "lastUpdated": true,
  "themeConfig": {
    "editLink": {
      "pattern": "https://github.com/mrbrianevans/ch-guide/edit/master/docs/:path",
      "text": "Edit this page on GitHub"
    }, "nav": [{
      "text": "Bulk data", "items": [{
        "text": "Overview", "link": "/bulk-data"
      }, {
        "text": "Companies", "link": "/bulk-data/companies"
      }, {
        "text": "Persons with significant control", "link": "/bulk-data/psc"
      }, {
        "text": "Officers", "link": "/bulk-data/officers/"
      }, {
        "text": "Accounts", "link": "/bulk-data/accounts/bulk-file"
      }]
    }, {
      "text": "Streaming API", "link": "/streams"
    }, {
      "text": "REST API", "link": "/rest-api"
    }], "sidebar": [{
      "text": "Bulk data", "items": [{
        "text": "Overview", "link": "/bulk-data"
      }, {
        "text": "Companies", "link": "/bulk-data/companies"
      }, {
        "text": "Persons with significant control", "link": "/bulk-data/psc"
      }, {
        "text": "Officers", "link": "/bulk-data/officers/"
      }, {
        "text": "Accounts", "link": "/bulk-data/accounts/bulk-file"
      }]
    }, {
      "text": "APIs", "items": [{
        "text": "Streaming API", "link": "/streams"
      }, {
        "text": "REST API", "link": "/rest-api"
      }]
    }], "footer": {
      "message": "Made with ♥ by Brian Evans"
    }, "socialLinks": [{
      "icon": "github", "link": "https://github.com/mrbrianevans/ch-guide"
    }]
  }
};

export default config;
