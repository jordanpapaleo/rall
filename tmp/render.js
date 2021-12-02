"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs = __importStar(require("fs"));
var prettier_1 = __importDefault(require("prettier"));
var react_1 = __importDefault(require("react"));
var server_1 = __importDefault(require("react-dom/server"));
var Staff_1 = __importDefault(require("./pages/Staff"));
var ContactInformation_1 = __importDefault(require("./pages/ContactInformation"));
var LiftLittleLeagueFundraiser_1 = __importDefault(require("./pages/LiftLittleLeagueFundraiser"));
var pages = [
    ContactInformation_1["default"],
    LiftLittleLeagueFundraiser_1["default"],
    Staff_1["default"]
];
pages.forEach(function (page) {
    var html = server_1["default"].renderToStaticMarkup(react_1["default"].createElement(page));
    var prettyHtml = prettier_1["default"].format(html, { parser: "html" });
    // @ts-ignore
    var outputFile = "./public/".concat(page.displayName, ".html");
    fs.writeFileSync(outputFile, prettyHtml);
    console.log("Wrote ".concat(outputFile));
});
