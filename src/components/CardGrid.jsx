/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import lessonsList from "../data/lesson";
import CardContainer from "./Card";

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  padding: 16px;
`;
const CardGrid = () => {
  const navigate = useNavigate();
  return (
    <div css={gridStyle}>
      {lessonsList.map((lesson) => (
        <CardContainer
          key={lesson.id}
          backgroundColor={lesson.backgroundColor}
          fontColor={lesson.fontColor}
          onClick={() => navigate(`/lesson/${lesson.id}`)}
        >
          {lesson.title}
        </CardContainer>
      ))}
    </div>
  );
};
export default CardGrid;
