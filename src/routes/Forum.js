import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Nweet from "components/Nweet";
import { Link } from "react-router-dom";

const Forum = ({ userObj, category }) => {
    const [nweets, setNweets] = useState([]);
    console.log(category);
    useEffect(() => {
        dbService
            .collection("nweets")
            .orderBy("createdAt", "desc")
            .onSnapshot((snapshot) => {
                const nweetArray = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setNweets(nweetArray);
            });
    }, []);
    return (
        <div className="container">
            <div className="center">
                <Link to="/new" className="factoryInput__link">
                    글 쓰기
                </Link>
            </div>
            <table border="10" bordercolor="red" style={{ marginTop: 30 }}>
                <tbody>
                    {nweets.map((nweet) => {
                        return (
                            nweet.category === category && (
                                <Nweet
                                    key={nweet.id}
                                    nweetObj={nweet}
                                    editPriority={
                                        nweet.creatorId === userObj.uid ||
                                        userObj.priority === 1
                                    }
                                />
                            )
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default Forum;
