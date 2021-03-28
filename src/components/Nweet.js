import React from "react";
import { Link } from "react-router-dom";
const Nweet = ({ nweetObj, num }) => {
    return (
        <tr className="nweet">
            <th>
                <Link to={`/detail/${nweetObj.id}`}>
                    <h4>
                        {num + 1}
                        {". "}
                        {nweetObj.title}
                    </h4>
                </Link>
            </th>
        </tr>
    );
};

export default Nweet;
