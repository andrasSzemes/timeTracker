const fs = require("fs");
const path = require("path");

const TRACK_PATH = path.join(__dirname, "/tracks");

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date = new Date().getDate();

const DAY_STRING = `${year}-${month}-${date}`;
const DAY_TRACK_PATH = path.join(TRACK_PATH, `${DAY_STRING}.txt`);

let dayTracks;

if (fs.existsSync(DAY_TRACK_PATH)) {
  try {
    const file = fs.readFileSync(DAY_TRACK_PATH);
    dayTracks = JSON.parse(file);
  } catch (err) {
    console.log(err);
  }
} else {
  dayTracks = {};
}

console.log(JSON.stringify(dayTracks, null, 2));
// on simple run, print the object

// terminal params like 'add', 'start', 'end' does the work