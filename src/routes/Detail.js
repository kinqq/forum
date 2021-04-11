import React, { useState } from "react";
import { dbService } from "fbase";
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";

const Detail = ({ userObj }) => {
    const { postId } = useParams();

    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");
    const [creater, setCreater] = useState("");
    const [createrName, setCreaterName] = useState("");
    const [createTime, setCreateTime] = useState("");
    const history = useHistory();
    useEffect(() => {
        dbService
            .collection("nweets")
            .doc(postId)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setCreater(doc.data().creatorId);
                    setCreaterName(doc.data().creatorName);
                    setPost(doc.data().desc);
                    setTitle(doc.data().title);
                    setCreateTime(doc.data().createdAt);
                } else {
                    alert("삭제되었거나 없는 게시물입니다.");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    });
    const onDeleteClick = async () => {
        const ok = window.confirm("정말 삭제하시겠습니까?");
        if (ok) {
            await dbService.doc(`nweets/${postId}`).delete();
            history.push("/");
        }
    };

    return (
        <>
            <span className="post__title">
                {title}
                {creater === userObj.uid || userObj.priority ? (
                    <span onClick={onDeleteClick}>
                        <FontAwesomeIcon
                            icon={faTrash}
                            size="xs"
                            className="trashIcon"
                        />
                    </span>
                ) : (
                    <></>
                )}
            </span>

            <hr className="post__hr" />
            <div className="post__desc">
                <div
                    className="ql-editor"
                    dangerouslySetInnerHTML={{ __html: post }}
                ></div>

                <div className="post__creator">{createrName}</div>
                <div className="post__creator">{createTime}</div>
            </div>
        </>
    );
};

export default Detail;
