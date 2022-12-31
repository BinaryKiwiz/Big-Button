import { database } from "./firebase.js";
import { onValue, ref, set, get } from "firebase/database";

const Get = (id) => {return document.getElementById(id)};
const Log = (message) => console.log(message);

let clicks = 0;
let tempClicks = 0;
let mmm = 0;

const animateClicks = (prev, curr, time, step, total) => {
    if(clicks != curr){ clicks = curr; }

    prev++;
    step++;
    Get("total-clicks").innerHTML = prev;

    if(prev < curr){
        setTimeout(animateClicks, time - (curve(step / total) / 2 * time), prev, curr, time, step, total);
    }
}

const updateClicks = () => Get("temp-clicks").innerHTML = tempClicks;

const pushClicks = () => {
    if(tempClicks < 1 || mmm != tempClicks){
        tempClicks = 0;
        mmm = 0;
        return false;
    }

    set(ref(database, "Clicks"), clicks + tempClicks);
    tempClicks = 0;
    mmm = 0;
    updateClicks();
}

const click = () => {
    tempClicks++;
    mmm++;
    updateClicks();
}

//Listen for changes to clicks
onValue(ref(database, "Clicks"), (c) => {
    const newClicks = c.val();

    animateClicks(clicks, newClicks, 100, 0, newClicks - clicks);
    Log(clicks);
});

const curve = (x) => {
    return -0.002729004 + (1.895092 - -0.002729004)/(1 + (x/0.8532622)**45.57359);
}

Get("the-button").addEventListener("click", click);
Get("push-clicks").addEventListener("click", pushClicks);