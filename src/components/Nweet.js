import React from "react";
import { Link } from "react-router-dom";
const Nweet = ({ nweetObj, editPriority }) => {
    return (
        <tr className="nweet">
            <th>
                <Link to={`/detail/${nweetObj.id}`}>
                    <h4>{nweetObj.title}</h4>
                </Link>
            </th>
        </tr>
    );
};

export default Nweet;
