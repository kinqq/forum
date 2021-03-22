import React from "react";
import Timetable from "comcigan-parser";
const timetable = new Timetable();

export default () => {
    timetable.init();
    console.log("init finish");
    timetable.setSchool("덕이중학교");
    console.log("setschool finish");
    const result = timetable.getTimetable();
    console.log("get timetable finish");
    console.log(result);
    return <div>TimeTable</div>;
};
