import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Nweet from "components/Nweet";
import { Link } from "react-router-dom";

const Forum = ({ category }) => {
    const [nweets, setNweets] = useState([]);

    useEffect(() => {
        dbService
            .collection("nweets")
            .where("category", "==", category)
            .get()
            .then((querySnapshot) => {
                const nweetArray = [];
                querySnapshot.forEach((doc) => {
                    nweetArray.push({ id: doc.id, ...doc.data() });
                });
                setNweets(nweetArray);
            });
    }, [category]);
    return (
        <div className="container">
            <div className="center">
                <Link to={"/new/" + category} className="factoryInput__link">
                    글 쓰기
                </Link>
            </div>
            <table border="10" bordercolor="red" style={{ marginTop: 30 }}>
                <tbody>
                    {nweets.map((nweet, n) => {
                        return (
                            <Nweet key={nweet.id} nweetObj={nweet} num={n} />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default Forum;
