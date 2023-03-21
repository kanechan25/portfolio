import bookingcare from "../../../assets/img/projects/bookingcare.png";
import autodesk from "../../../assets/img/projects/autodesk.png";
import tiktok from "../../../assets/img/projects/tiktok.png";
import bim5dsoftware from "../../../assets/img/projects/bim5dsoftware.png";
import bim5ddatabase from "../../../assets/img/projects/bim5ddatabase.png";
import bim5daddin from "../../../assets/img/projects/bim5daddin.png";
import musicplayer from "../../../assets/img/projects/musicplayer.png";
import restaurant from "../../../assets/img/projects/restaurant.png";
import airdrop from "../../../assets/img/projects/airdrop.png";
import future from "../../../assets/img/projects/future.png";
import {
  languageData,
  frameworkData,
  databaseData,
  relevantData,
} from "../../../components/Portfolio/Skills/SkillData";

export const projectData = [
  {
    id: 1,
    project: "AIRDROP CAMPAIGNS",
    projectImg: airdrop,
    type: "Web Application",
    title: "Web App (Financial Marketplace)",
    link: "https://position.exchange/dex/airdrop",
    back: [
      "Responsive web design by NextJS and TypeScript",
      "Campaigns include 01 landing page and 05 other web page",
      "Many games and users claim rewards",
      "Miniapp and Deeplink for Mobile",
    ],
    subTech: [],
    tech: [
      languageData[2],
      languageData[1],
      languageData[3],
      languageData[5],
      frameworkData[0],
      frameworkData[6],
      frameworkData[7],
      frameworkData[8],
      frameworkData[1],
      frameworkData[2],
      databaseData[0],
      relevantData[0],
      relevantData[1],
      relevantData[3],
      relevantData[5],
      relevantData[6],
    ],
  },
  {
    id: 2,
    project: "FUTURE TRADING",
    projectImg: future,
    type: "Web Application",
    title: "DeFi (Financial Marketplace)",
    link: "https://position.exchange/futures/USD-M/BTC/BUSD",
    back: [
      "Responsive web design by NextJS and TypeScript",
      "Derivatives product: futures contract on DeFi marketplace",
      "Real-time application RTAs (WebSockets)",
    ],
    subTech: [],
    tech: [
      languageData[2],
      languageData[1],
      languageData[3],
      languageData[5],
      frameworkData[0],
      frameworkData[6],
      frameworkData[7],
      frameworkData[8],
      frameworkData[1],
      frameworkData[2],
      databaseData[0],
      relevantData[0],
      relevantData[1],
      relevantData[3],
      relevantData[5],
      relevantData[6],
    ],
  },

  {
    id: 3,
    project: "BOOKING CARE",
    projectImg: bookingcare,
    type: "Web Application",
    title: "Web App in Health care industry",
    link: "https://frontend-bookingcare-reactjs.herokuapp.com/",
    back: [
      "Responsive web design",
      "Web application in Health care industry",
      "Patient booking an appointment with a Doctor",
      "Log in and Sign out feature",
      "Toggle Bilingual",
      "Auto-send confirm email",
      "Doctors prescribe and send prescription",
    ],
    subTech: [],
    tech: [
      languageData[1],
      languageData[2],
      languageData[3],
      languageData[5],
      frameworkData[0],
      frameworkData[1],
      frameworkData[2],
      frameworkData[3],
      frameworkData[4],
      frameworkData[5],
      databaseData[0],
      databaseData[1],
      relevantData[0],
      relevantData[1],
      relevantData[3],
      relevantData[5],
      relevantData[6],
    ],
  },

  {
    id: 4,
    project: "TIKTOK",
    projectImg: tiktok,
    type: "Web Application",
    title: "Web App for Entertainment",
    link: "https://tiktok25.vercel.app/",
    back: [
      "Clone UI/UX of Tiktok App",
      "React Function components",
      "Responsive web design",
      "Log in and Sign out",
      "Search Engine",
      "Multi-tab Inbox",
      "Swipe and interact with videos : like, comment, share",
    ],
    subTech: [],
    tech: [
      languageData[1],
      languageData[3],
      languageData[5],
      frameworkData[0],
      frameworkData[1],
      frameworkData[2],
      frameworkData[3],
      //frameworkData[4],
      frameworkData[5],
      databaseData[1],
      relevantData[0],
      relevantData[1],
      relevantData[3],
      relevantData[5],
      relevantData[6],
    ],
  },

  {
    id: 5,
    project: "AUTODESK",
    projectImg: autodesk,
    type: "Web Application",
    title: "Web App in Construction industry",
    link: "https://kanechan25.github.io/autodesk.github.io/",
    back: [
      "Clone UI/UX of Autodesk's website",
      "Responsive web design",
      "I had done website as a submission in a Contest",
    ],
    subTech: [],
    tech: [
      languageData[1],
      languageData[3],
      languageData[5],
      frameworkData[5],
      relevantData[0],
      relevantData[3],
      relevantData[6],
    ],
  },

  {
    id: 6,
    project: "MUSIC PLAYER",
    projectImg: musicplayer,
    type: "Web Application",
    title: "Web App for Entertainment ",
    link: "https://kanechan25.github.io/musicplayer.github.io/",
    back: [
      "Music Media Player",
      "You can seek, next/back, pause, random, shuffle, repeat songs like other music player",
    ],
    subTech: [],
    tech: [
      languageData[1],
      languageData[3],
      languageData[4],
      relevantData[0],
      relevantData[3],
      relevantData[6],
    ],
  },

  {
    id: 7,
    project: "BIM-5D SOFTWARE",
    projectImg: bim5dsoftware,
    type: "Desktop Application",
    title: "Desktop App in Construction industry",
    link: "https://github.com/kanechan25/bim5d_software",
    back: [
      "BIM is abbr of 'Building Information Management' ",
      "BIM-5D is a project which to support Civil Engineer in construction quantity calculation and cost estimation",
      "The software calculates quantity/volume/amount of concrete, tiles, ceiling, rebar, brick... of the building",
    ],
    subTech: ["Revit API", "OOP", "Windows Forms", "Algorithm"],
    tech: [
      languageData[0],
      languageData[6],
      databaseData[0],
      relevantData[0],
      relevantData[4],
      relevantData[7],
    ],
  },

  {
    id: 8,
    project: "BIM-5D ADD-IN",
    projectImg: bim5daddin,
    type: "Desktop Application",
    title: "Desktop App in Construction industry",
    link: "https://github.com/kanechan25/bim5d_addin",
    back: [
      "BIM is a workflow which Civil engineer models building 3D and calculates based on that 3D model",
      "This Add-in attaches to Autodesk Software, supports throughout the building modeling process",
      "The Add-in helps to CRUD information of every/all elements of the model",
    ],
    subTech: ["Revit API", "OOP", "Windows Forms"],
    tech: [
      languageData[0],
      languageData[6],
      databaseData[0],
      relevantData[0],
      relevantData[2],
      relevantData[4],
      relevantData[7],
    ],
  },

  {
    id: 9,
    project: "BIM-5D DATABASE",
    projectImg: bim5ddatabase,
    type: "Desktop Application",
    title: "Desktop App base on MS Excel",
    link: "https://github.com/kanechan25/bim5d_database_management",
    back: [
      "CDE is abbr of 'Common Data Environment' ",
      "CDE of the BIM-5D project is Google Cloud (Drive)",
      "VB.net scripts help manage/categorize file system",
      "To CRUD files in folder on CDE ",
    ],
    subTech: [],
    tech: [languageData[6], relevantData[7]],
  },

  {
    id: 10,
    project: "RESTAURANT MANAGEMENT",
    projectImg: restaurant,
    type: "Desktop Application",
    title: "Desktop App in F&B industry",
    link: "https://github.com/kanechan25/Restaurant-Management-App",
    back: [
      "This software supports a Restaurant in: ",
      "  Ordering dishes, creating bills, payment and other administration",
    ],
    subTech: ["Singleton", "MVC Model"],
    tech: [
      languageData[0],
      languageData[2],
      databaseData[0],
      relevantData[0],
      relevantData[4],
      relevantData[7],
    ],
  },
];
