/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

function EventHandlingDetail() {
  const [event, setEvnet] = useState("");
  const [hover, setHover] = useState("Hover 전");

  const handleClick = () => {
    setEvnet("클릭");
  };

  const handleDoubleClick = () => {
    setEvnet("더블 클릭");
  };

  const handleHover = (value) => {
    if (value === "over") {
      setHover("Hover 되었습니다.");
    } else if (value === "out") {
      setHover("Hover out 되었습니다.");
    } else if (value === "leave") {
      setHover("마우스가 떠났습니다.");
    } else if (value === "move") {
      setHover("마우스가 움직이는 중입니다.");
    }
  };

  return (
    <Container>
      <span
        css={css`
          font-size: 30px;
          font-weight: 500;
          text-align: center;
          margin: 16px 0;
        `}
      >
        Event Handling
      </span>
      <p>
        {" "}
        {event === ""
          ? "클릭이나 더블클릭을 해보세요."
          : `지금 ${event}를 하셨군요.`}
      </p>
      <button
        css={css`
          width: 100px;
        `}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        클릭
      </button>

      <span>Mouse Hover</span>
      <div
        onMouseOver={() => handleHover("over")}
        onMouseOut={() => handleHover("out")}
        onMouseLeave={() => handleHover("leave")}
        onMouseMove={() => handleHover("move")}
        css={css`
          background-color: yellow;
          width: 300px;
          height: 300px;
          text-align: center;
          align-content: center;
        `}
      >
        {hover}
      </div>
    </Container>
  );
}

export default EventHandlingDetail;
