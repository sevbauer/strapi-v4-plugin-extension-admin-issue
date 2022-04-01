# strapi-v4-plugin-extension-admin-issue

Reproduceable Repo for following issue: [https://github.com/strapi/documentation/issues/555](https://github.com/strapi/documentation/issues/555)

## Installation

* Clone the repo
* `cd strapi-v4-plugin-extension-admin-issue`
* `npm run build`
* `npm run develop`

## The setup

* Created a Strapi quick-start project ([https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/installation/cli.html#creating-a-strapi-project](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/installation/cli.html#creating-a-strapi-projecthttps://))
* Added the mux-video-uploader plugin as dependency ([https://github.com/muxinc/strapi-plugin-mux-video-uploader](https://github.com/muxinc/strapi-plugin-mux-video-uploaderhttps://))
* Added a folder `mux-video-uploader` to `src/extensions`
* Added files `strapi-admin.js` and `strapi-server.js` to the plugin-extension folder with a `console-log`

## Expected behaviour

When starting Strapi in develop-mode, print following to the console:

* `Extending strapi-admin.js`
* `Extending strapi-server.js`

## Actual behaviour

When starting Strapi in develop-mode it prints following to the console:

* `Extending strapi-server.js`

**So the Strapi-admin extension is not loaded.**

![image](https://user-images.githubusercontent.com/51238101/161230408-fccc9c4a-76e7-4178-ab95-61a73a831686.png)
