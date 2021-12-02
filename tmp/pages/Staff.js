"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var styles_1 = require("../styles");
var boardMembers_1 = require("../data/boardMembers");
var Contact_1 = __importDefault(require("../components/Contact"));
var orderBy_1 = __importDefault(require("lodash/orderBy"));
var Staff = function () {
    var eboard = (0, orderBy_1["default"])(boardMembers_1.STAFF, ['role', 'lastName'], ['asc'])
        .filter(function (_a) {
        var active = _a.active;
        return active;
    })
        .filter(function (_a) {
        var role = _a.role;
        return role;
    });
    var regboard = (0, orderBy_1["default"])(boardMembers_1.STAFF, ['lastName'], ['asc'])
        .filter(function (_a) {
        var active = _a.active;
        return active;
    })
        .filter(function (_a) {
        var role = _a.role;
        return !role;
    })
        .map(function (_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        return firstName + ' ' + lastName;
    })
        .join(', ');
    return (react_1["default"].createElement("div", { className: "staff" },
        react_1["default"].createElement("style", null, "\n        .staff li:hover {\n          background-color: ".concat(styles_1.colorHash.grey200, ";\n        }\n\n        .staff .eboard {\n          color: ").concat(styles_1.colors.defaultText, ";\n          display: grid;\n          font-size: ").concat(styles_1.fonts.textLg, ";\n          grid-template-columns: 150px 150px 1fr;\n          padding: ").concat(styles_1.spacing.w4, " 0;\n        }\n\n        .staff .boardmembers {\n          color: ").concat(styles_1.colors.defaultText, ";\n          font-size: ").concat(styles_1.fonts.textBase, ";\n          line-height: 1.5;\n        }\n      ")),
        react_1["default"].createElement("h2", null, "2022 Executive Board Members"),
        react_1["default"].createElement("ul", { style: { listStyleType: 'none', margin: 0, padding: 0 } }, eboard.map(function (_a) {
            var firstName = _a.firstName, lastName = _a.lastName, role = _a.role, email = _a.email;
            return (react_1["default"].createElement("li", { style: { marginBottom: styles_1.spacing.w2 } },
                react_1["default"].createElement("h3", { className: "eboard" },
                    react_1["default"].createElement("strong", null,
                        firstName,
                        " ",
                        lastName),
                    boardMembers_1.ROLES[role],
                    email
                        ? react_1["default"].createElement("a", { href: "mailto:".concat(email) }, email)
                        : email)));
        })),
        react_1["default"].createElement("hr", { style: { margin: "".concat(styles_1.spacing.w4, " 0") } }),
        react_1["default"].createElement("h2", null, "2022 Board Members"),
        react_1["default"].createElement("div", { className: "boardmembers" }, regboard),
        react_1["default"].createElement("hr", { style: { margin: "".concat(styles_1.spacing.w4, " 0") } }),
        react_1["default"].createElement(Contact_1["default"], { style: { marginTop: styles_1.spacing.w4 } })));
};
Staff.displayName = 'staff';
exports["default"] = Staff;
