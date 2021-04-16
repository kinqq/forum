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
        <div className="profile__title">
            <div className="profile__timeTable__Title">{`<${
                date.getMonth() + 1
            }월 ${date.getDate()}일 시간표>`}</div>
            <table className="profile__timeTable">
                <thead>
                    <tr className="profile__timeTable__tr">
                        <th>교시</th>
                        <th>과목</th>
                    </tr>
                </thead>
                <tbody className="profile__timeTable">
                    {week &&
                        week.map((day, index) => {
                            if (day.subject)
                                return (
                                    <tr
                                        className="profile__timeTable__tr"
                                        key={"table" + day.subject}
                                    >
                                        <td
                                            key={"index" + day.subject}
                                            className="profile__timeTable__content"
                                        >
                                            {index + 1 + "교시"}
                                        </td>
                                        <td
                                            key={"time" + day.subject}
                                            className="profile__timeTable__subject"
                                        >
                                            {day.subject}
                                        </td>
                                    </tr>
                                );
                            else return null;
                        })}
                </tbody>
            </table>
        </div>
    );
};
