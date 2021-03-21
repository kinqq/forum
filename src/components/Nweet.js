import React, { useState } from "react";
import { dbService, storageService } from "fbase";
import { Link } from "react-router-dom";
const Nweet = ({ nweetObj, editPriority }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm(
            "Are you sure you want to delete this nweet?"
        );
        if (ok) {
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
            await storageService.refFromURL(nweetObj.attachmentUrl).delete();
        }
    };
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`nweets/${nweetObj.id}`).update({
            text: newNweet,
        });
        setEditing(false);
    };
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewNweet(value);
    };
    return (
        <tr className="nweet">
            <th>
                <Link to={`/detail/${nweetObj.id}`}>
                    <h4>{nweetObj.title}</h4>
                </Link>
            </th>

            {/* {editing ? (
            <>
                <form onSubmit={onSubmit} className="container nweetEdit">
                    <input
                        type="text"
                        placeholder="Edit your nweet"
                        value={newNweet}
                        required
                        autoFocus
                        onChange={onChange}
                        className="formInput"
                    />
                    <input
                        type="submit"
                        value="Update Nweet"
                        className="formBtn"
                    />
                </form>
                <span onClick={toggleEditing} className="formBtn cancelBtn">
                    Cancel
                </span>
            </>
        ) : (
            <>
                <h4>{nweetObj.title}</h4>
                {<div className="nweet__actions">
                    {editPriority && (
                        <>
                            <span onClick={onDeleteClick}>
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                            <span onClick={toggleEditing}>
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </span>
                            <Link to={`/detail/${nweetObj.id}`}>
                                <FontAwesomeIcon icon={faUser} />
                            </Link>
                        </>
                    )}
                </div> }
            </>
        )} */}
        </tr>
    );
};

export default Nweet;
