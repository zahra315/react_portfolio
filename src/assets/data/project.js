import { v4 as uuidv4 } from "uuid";
import wordPartyImage from "../image/WordParty.png";
import wetherApp from "../image/weatherapp.jpg";
import dayPlanner from "../image/dayplanner.jpg";
import projectImg from "../image/project.png";

const Projects = [
  {
    id: uuidv4(),
    name: "Word Party Dictionary",
    desc: "Returns information about the word from dictionary.com",
    img: wordPartyImage,
  },
  {
    id: uuidv4(),
    name: "Workout Tracker",
    desc: "Create, and track daily workouts",
    img: projectImg,
  },
  {
    id: uuidv4(),
    name: "eCommerce Cart",
    desc: "Shopping Cart",
    img: projectImg,
  },
  {
    id: uuidv4(),
    name: "Budget Tracker",
    desc: "Add expenses and deposits to their budget with or without a connection",
    img: projectImg,
  },
  {
    id: uuidv4(),
    name: "Weather App",
    desc: "Find a weather condition of a given city both the current and 5-Days forecast at the same time",
    img: wetherApp,
  },
  {
    id: uuidv4(),
    name: "Block Planner",
    desc: "Save events for each hour of the day by modifying starter code",
    img: dayPlanner,
  },
];

export default Projects;
