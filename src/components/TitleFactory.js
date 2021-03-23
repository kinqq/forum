import React from "react";

const TitleFactory = ({ title, onChange, category, onCategoryChange }) => {
    return (
        <>
            <input
                className="factoryInput__title"
                value={title || ""}
                onChange={onChange}
                type="text"
                placeholder="제목을 입력하세요."
                maxLength={120}
            />
            <form>
                <select value={category} onChange={onCategoryChange}>
                    <option>수행평가 게시판</option>
                    <option>학사일정 게시판</option>
                    <option>자유 게시판</option>
                </select>
            </form>
        </>
    );
};

export default TitleFactory;
