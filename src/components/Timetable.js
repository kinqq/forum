import React from "react";
import { gql, useQuery } from "@apollo/client";

export default () => {
    const date = new Date();
    const weekday = date.getDay() - 1;
    const apiQuery = gql`
        {
            week(weekday: ${weekday}) {
                grade
                class
                weekdayString
                classTime
                teacher
                subject
            }
        }
    `;
    const { data } = useQuery(apiQuery);
    const week = data ? data.week : null;
    return (
        <span className="profile__timeTable">
            <div className="profile__timeTable__Title">{`<${
                date.getMonth() + 1
            }월 ${date.getDate()}일 시간표>`}</div>
            <div className="profile__timeTable">
                {week &&
                    week.map((day, index) => {
                        if (day.subject)
                            return (
                                <div
                                    key={"time" + day.subject}
                                    className="profile__timeTable__content"
                                >
                                    {index + 1 + ". " + day.subject}
                                </div>
                            );
                        else return null;
                    })}
            </div>
        </span>
    );
};
