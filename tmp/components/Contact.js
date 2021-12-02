"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.AddressBlock = exports.contactInfo = exports.address = void 0;
var react_1 = __importDefault(require("react"));
var styles_1 = require("../styles");
var styleDD = {
    display: 'grid',
    gridTemplateColumns: '150px 1fr',
    fontSize: styles_1.spacing.w4
};
exports.address = {
    street: "PO Box 33156",
    city: 'Reno',
    state: 'NV',
    zipcode: '89533'
};
exports.contactInfo = {
    phone: '775-453-0416',
    generalEmail: 'info@renoamerican.com',
    safety: 'safety@renoamerican.com',
    registration: 'registration@renoamerican.com',
    backgroundChecks: 'background@renoamerican.com'
};
var AddressBlock = function (_a) {
    var _b = _a.style, style = _b === void 0 ? {} : _b;
    return (react_1["default"].createElement("address", { style: style },
        exports.address.street,
        react_1["default"].createElement("br", null),
        exports.address.city,
        ", ",
        exports.address.state,
        " ",
        exports.address.zipcode));
};
exports.AddressBlock = AddressBlock;
var Contact = function (_a) {
    var _b = _a.style, style = _b === void 0 ? {} : _b;
    return (react_1["default"].createElement("dl", { style: style },
        react_1["default"].createElement("div", { style: styleDD },
            react_1["default"].createElement("dd", { style: { fontWeight: 'bold' } }, "Phone:"),
            react_1["default"].createElement("dt", null,
                react_1["default"].createElement("a", { href: "tel:".concat(exports.contactInfo.phone) }, exports.contactInfo.phone))),
        react_1["default"].createElement("div", { style: styleDD },
            react_1["default"].createElement("dd", { style: { fontWeight: 'bold' } }, "General Contact:"),
            react_1["default"].createElement("dt", null,
                react_1["default"].createElement("a", { href: "mailto:".concat(exports.contactInfo.generalEmail) }, exports.contactInfo.generalEmail))),
        react_1["default"].createElement("div", { style: styleDD },
            react_1["default"].createElement("dd", { style: { fontWeight: 'bold' } }, "Safety:"),
            react_1["default"].createElement("dt", null,
                react_1["default"].createElement("a", { href: "mailto:".concat(exports.contactInfo.safety) }, exports.contactInfo.safety))),
        react_1["default"].createElement("div", { style: styleDD },
            react_1["default"].createElement("dd", { style: { fontWeight: 'bold' } }, "Registration:"),
            react_1["default"].createElement("dt", null,
                react_1["default"].createElement("a", { href: "mailto:".concat(exports.contactInfo.registration) }, exports.contactInfo.registration))),
        react_1["default"].createElement("div", { style: styleDD },
            react_1["default"].createElement("dd", { style: { fontWeight: 'bold' } }, "Background Checks:"),
            react_1["default"].createElement("dt", null,
                react_1["default"].createElement("a", { href: "mailto:".concat(exports.contactInfo.backgroundChecks) }, exports.contactInfo.backgroundChecks)))));
};
exports["default"] = Contact;
