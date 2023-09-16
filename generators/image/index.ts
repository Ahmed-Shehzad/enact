import * as fs from "fs";
import * as path from "path";

const teamPath = "./public/team/";
const carouselPath = "./public/carousel/";

function getFileWithoutExtension(filename: string) {
  return path.parse(filename).name;
}

function getFilenamesWithExtensions(directoryPath: string) {
  const names = fs.readdirSync(directoryPath).filter((file) => {
    return fs.statSync(`${directoryPath}/${file}`).isFile();
  });
  return names;
}

const carouselsImports: string[] = [];
const carousels = getFilenamesWithExtensions(carouselPath);

const teamImports: string[] = [];
const teams = getFilenamesWithExtensions(teamPath);

let carouselBuilder = "";
carouselBuilder += `[`;
carousels.forEach((carousel) => {
  const fileName = getFileWithoutExtension(carousel).replace(/-/g, "_");
  carouselBuilder += `${fileName}, `;
  carouselsImports.push(
    `import ${fileName} from "@public/carousel/${carousel}";`,
  );
});
carouselBuilder += `]\n`;

let teamBuilder = "";
teamBuilder += `{\n`;
teams.forEach((team) => {
  const fileName = getFileWithoutExtension(team);
  teamBuilder += `${fileName}: ${fileName},\n`;
  teamImports.push(`import ${fileName} from "@public/team/${team}";`);
});

teamBuilder += `},\n`;

const importsBuilder = [...carouselsImports, ...teamImports];

let fileBuilder = "";

importsBuilder.forEach((importStatement) => {
  fileBuilder += `${importStatement}\n`;
});

fileBuilder += `\n`;

fileBuilder += `
  export const images = {
    team: ${teamBuilder}
    carousel: ${carouselBuilder}
  }
`;

fileBuilder += `\n`;

fs.writeFileSync("./src/images/index.ts", fileBuilder);
