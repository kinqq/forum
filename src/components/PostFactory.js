import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
    toolbar: [
        //[{ 'font': [] }],
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image"],
        [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
        ["clean"],
    ],
};

const formats = [
    //'font',
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
];

const PostFactory = ({ value, onChange }) => {
    return (
        <div className="postfactory" style={{ height: "650px" }}>
            <ReactQuill
                style={{ height: "600px" }}
                theme="snow"
                modules={modules}
                formats={formats}
                value={value || ""}
                onChange={onChange}
            />
        </div>
    );
};

export default PostFactory;
