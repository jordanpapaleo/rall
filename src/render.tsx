import * as fs from "fs";
import prettier from "prettier";
import React from "react";
import ReactDOMServer from "react-dom/server"
import BackgroundChecks from './pages/BackgroundChecks'
import ContactInformation from './pages/ContactInformation'
import LiftLittleLeagueFundraiser from './pages/LiftLittleLeagueFundraiser'
import Staff from './pages/Staff'
import AllStars from './pages/AllStars'
import Hooligans from './pages/Hooligans'
import Results from './pages/Results'

const pages = [
  BackgroundChecks,
  ContactInformation,
  LiftLittleLeagueFundraiser,
  Staff,
  AllStars,
  Hooligans,
  Results,
]

pages.forEach((page) => {
  let html = ReactDOMServer.renderToStaticMarkup(React.createElement(page));
  let prettyHtml = prettier.format(html, { parser: "html" });
  // @ts-ignore
  let outputFile = `./public/${page.displayName}.html`;
  fs.writeFileSync(outputFile, prettyHtml);
  console.log(`Wrote ${outputFile}`);
})


