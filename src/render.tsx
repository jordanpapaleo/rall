import * as fs from "fs";
import prettier from "prettier";
import React from "react";
import ReactDOMServer from "react-dom/server"
import Staff from './pages/Staff'
import ContactInformation from './pages/ContactInformation'
import LiftLittleLeagueFundraiser from './pages/LiftLittleLeagueFundraiser'

const pages = [
  ContactInformation,
  LiftLittleLeagueFundraiser,
  Staff
]

pages.forEach((page) => {
  let html = ReactDOMServer.renderToStaticMarkup(React.createElement(page));
  let prettyHtml = prettier.format(html, { parser: "html" });
  // @ts-ignore
  let outputFile = `./public/${page.displayName}.html`;
  fs.writeFileSync(outputFile, prettyHtml);
  console.log(`Wrote ${outputFile}`);
})


