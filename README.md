<div align="center">
  <img src="https://github.com/Yordinia/Webpack_Initiator/blob/main/Yordi.png" alt="logo" width="300px"  height="300px" />
  <br/>
  <h3><b>Webpack App Starter</b></h3>
</div>

This is a simple starter project for building web applications using Webpack. It includes configuration files for development and production builds, as well as basic file structure for a typical web app.

# [Deployed link](https://yordinia.github.io/Webpack_Initiator/)

## Getting Started

To get started with this project, clone the repository to your local machine and install the required dependencies:

```sh
 git clone git@github.com:yordinia/webpack_initiator.git
 cd webapp-starter
 npm install

```

## Usage

To start a development server, run the following command:

Run Dev Server (Port 8080)

```sh
  npm start
```

This will start a local server at http://localhost:8080 and will automatically reload the page whenever you make changes to your code.

## Production

To create a production build, run the following command:

```sh
  npm run build
```

This will create a production-ready build of your application in the docs folder.

## Configuration

This starter project uses Webpack to bundle and optimize your code. The configuration file webpack.config.js includes the following:

- mode: Set to 'development' or 'production' depending on whether you are building for development or production.
- entry: The entry point for your application. Change this to the path of your main JavaScript file.
- devServer: Configuration for the development server, including the location of your static files.
- plugins: Additional plugins to use with Webpack, such as the HtmlWebpackPlugin which generates an HTML file to serve your bundled JavaScript.
- output: Configuration for where Webpack should output your bundled JavaScript file.
- module: Configuration for how Webpack should handle different types of files. In this case, it includes a rule for handling CSS files using the css-loader and style-loader.

## src directory

The source directory contains:

- index.html (main HTML)
- style.css (main styles)
- script.js (main JavaScript)

## License

This project is [MIT](https://github.com/Yordinia/yordinia/blob/main/LICENSE.md
) licensed.
