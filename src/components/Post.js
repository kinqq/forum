import React, { useState } from "react";
import PostFactory from "./PostFactory";
import { v4 as uuidv4 } from "uuid";
import TitleFactory from "./TitleFactory";
import { storageService, dbService } from "fbase";
import { useHistory } from "react-router";

const Post = ({ userObj }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const history = useHistory();
    let en = -1;
    let result = "";
    const onSubmit = async (event) => {
        result = desc;
        document.getElementsByClassName("factoryInput__arrow")[0].value =
            "게시중...";
        while (1) {
            let st = result.indexOf('<img src="', en);
            en = result.indexOf('">', st + 1);
            if (st === -1) {
                break;
            }
            const attachmentRef = storageService
                .ref()
                .child(`${userObj.uid}/${uuidv4()}`);
            const response = await attachmentRef.putString(
                result.substring(st + 10, en),
                "data_url"
            );
            const downloadURL = await response.ref.getDownloadURL();
            result =
                result.substring(0, st + 10) +
                downloadURL +
                result.substring(en, result.length);
            en = result.indexOf('">', st + 1);
            console.log(result);
        }
        event.preventDefault();
        if (title === "") {
            alert("제목을 입력하세요.");
            document.getElementsByClassName("factoryInput__title")[0].focus();
            return;
        } else if (desc === "") {
            alert("본문을 입력하세요.");
            document.getElementsByClassName("ql-editor")[0].focus();
            return;
        }
        const day = new Date().toLocaleString();
        const nweetObj = {
            title: title,
            desc: result,
            createdAt: day,
            creatorId: userObj.uid,
            creatorName: userObj.displayName,
        };
        await dbService.collection("nweets").add(nweetObj);
        setTitle("");
        setDesc("");
        history.push("/");
    };
    const onTitleChange = (e) => {
        const {
            target: { value },
        } = e;
        setTitle(value);
    };
    return (
        <form onSubmit={onSubmit} className="factoryForm">
            <div>
                <TitleFactory title={title} onChange={onTitleChange} />
                <PostFactory value={desc} onChange={setDesc} />
                <div className="center">
                    <input
                        type="submit"
                        value="게시"
                        className="factoryInput__arrow"
                    />
                </div>
            </div>
        </form>
    );
};

export default Post;
