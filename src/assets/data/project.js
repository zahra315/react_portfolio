import { v4 as uuidv4 } from "uuid";
import wordPartyImage from "../image/WordParty.png";
import wetherApp from "../image/weatherapp.jpg";
import dayPlanner from "../image/dayplanner.jpg";
import lightningNote from "../image/LightningNotes.png";
import fitnessTracker from "../image/workoutTracker.png";
import eCommerce from "../image/eCommerce.png";

const Projects = [
  {
    id: uuidv4(),
    name: "Word Party Dictionary",
    desc: "Returns information about the word from dictionary.com",
    img: wordPartyImage,
    link: "https://ericrudeen.github.io/word-party/",
  },
  {
    id: uuidv4(),
    name: "Workout Tracker",
    desc: "Create, and track daily workouts.",
    img: fitnessTracker,
    link: "https://mighty-headland-24698.herokuapp.com/",
  },
  {
    id: uuidv4(),
    name: "eCommerce Cart",
    desc: "Full Stack eCommerce Cart builds (React, Redux, Node, Express, MongoDB).",
    img: eCommerce,
    link: "https://github.com/zahra315/eCommerce-Cart.git",
  },
  {
    id: uuidv4(),
    name: "Lightning Notes",
    desc: "The user can prioritize notes by pinning them and organize notes into categories.",
    img: lightningNote,
    link: "https://aqueous-everglades-37857.herokuapp.com/",
  },
  {
    id: uuidv4(),
    name: "Weather Dashboard",
    desc: "Find a weather condition of a given city both the current and 5-Days forecast at the same time",
    img: wetherApp,
    link: "https://zahra315.github.io/weather-app/",
  },
  {
    id: uuidv4(),
    name: "Block Planner",
    desc: "Save events for each hour of the day by modifying starter code",
    img: dayPlanner,
  },
];

export default Projects;
