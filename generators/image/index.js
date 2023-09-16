"use strict";
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var teamPath = "./public/team/";
var carouselPath = "./public/carousel/";
function getFileWithoutExtension(filename) {
  return path.parse(filename).name;
}
function getFilenamesWithExtensions(directoryPath) {
  var names = fs.readdirSync(directoryPath).filter(function (file) {
    return fs.statSync("".concat(directoryPath, "/").concat(file)).isFile();
  });
  return names;
}
var carouselsImports = [];
var carousels = getFilenamesWithExtensions(carouselPath);
var teamImports = [];
var teams = getFilenamesWithExtensions(teamPath);
var carouselBuilder = "";
carouselBuilder += "[";
carousels.forEach(function (carousel) {
  var fileName = getFileWithoutExtension(carousel).replace(/-/g, "_");
  carouselBuilder += "".concat(fileName, ", ");
  carouselsImports.push(
    "import "
      .concat(fileName, ' from "@public/carousel/')
      .concat(carousel, '";'),
  );
});
carouselBuilder += "]\n";
var teamBuilder = "";
teamBuilder += "{\n";
teams.forEach(function (team) {
  var fileName = getFileWithoutExtension(team);
  teamBuilder += "".concat(fileName, ": ").concat(fileName, ",\n");
  teamImports.push(
    "import ".concat(fileName, ' from "@public/team/').concat(team, '";'),
  );
});
teamBuilder += "},\n";
var importsBuilder = __spreadArray(
  __spreadArray([], carouselsImports, true),
  teamImports,
  true,
);
var fileBuilder = "";
importsBuilder.forEach(function (importStatement) {
  fileBuilder += "".concat(importStatement, "\n");
});
fileBuilder += "\n";
fileBuilder += "\n  export const images = {\n    team: "
  .concat(teamBuilder, "\n    carousel: ")
  .concat(carouselBuilder, "\n  }\n");
fileBuilder += "\n";
fs.writeFileSync("./src/images/index.ts", fileBuilder);
