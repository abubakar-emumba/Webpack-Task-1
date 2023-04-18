**Webpack Configuration for a React TypeScript Sass Styled-components.**

- To run: npm start

- To build: npm run build

**Documentation:**

- **entry**: defines the entry point

- **output**: defines the output destination

  - _filename_: if passed with contenthash, it helps in caching,
  - _clean_: to remove previous files,
  - _assetModuleFilename_: passed to contain image name and extension as it is.

- **devtool**: boolean for devtools during development mode

- **mode**: passed from the script using flags and parsed via argv parameter. could also be done via env parameter but using argv parameter is recommended in docs.

- **devServer**: used to configure local development server that serves bundled assets and other features which facilitate development i.e. hot reloading, app openning, etc.. The app is fast because it is being server from memory rather than hard disk.

  - port: specifies port
  - static.directory: is the new contentBase
  - hot: for hot module replacement
  - open: opens the app at start
  - compress: tells the development server to compress the assets before sending them over the network, and the browser automatically decompresses them upon receipt. this increases performance and improves load time.
  - historyApiFallback: if true, navigates to index.html location if wrong url is entered. 'index:"custom-fallback-file"' and 'rewrites=array of {from,to} objects' can be passed to customize fallbacks.

- **module**: configures loaders.
  > Loaders are required by webpack to transpile files other than JS and JSON.

* _rules_ used to specify loaders for modules.

  - _test_ contains regex of file extensions.
  - _exclude_ allows to skip folders contain test files i.e. node_modules because this transpilation can be expensive.
  - _use_: to pass more than one loader. If it is an array, loaders will transpile from right to left.
  - _loader_: if there is only one loader, we can pass it in _loader_ instead of _use_.
  - _type_: a built-in module type that allows to handle various types of assets, including images, fonts, and other files.

* **resolve**:

  - _extensions_: facilitate imports so that extension don't need to mentioned specifically.

* **plugins**: used to optimize build process, automate tedious tasks, and customize output to meet specific needs.
  - _html-webpack-plugin_: generates html files to serve the bundle.
  - _copy-webpack-plugin_: copies assets to output directory i.e. images, fonts, etc.
    - _patterns_ array specifies files to copied and their destination.
    - _globOptions.ignore_ is used to exclude desired files.
