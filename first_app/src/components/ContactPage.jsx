/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled/macro";
import article from "../assets/images/illustration-article.svg";
import profileImage from "../assets/images/image-avatar.webp";

const ContentBackground = styled.div`
  background-color: white;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: start;
  border-radius: 16px;
  border: 3px solid hsl(47, 88%, 63%);
  padding: 16px;
  margin: 0auto;
`;
const ImageWrapper = styled.img`
  border-radius: 16px;
  width: 100%;
`;
const SpanStyle = styled.span`
  background-color: hsl(47, 88%, 63%);
  border-radius: 4px;
  margin-top: 20px;
  padding: 4px 16px;
  font-weight: 600;
  font-size: 12px;
`;
const ProfileStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
function ContactPage() {
  return (
    <ContentBackground>
      <ImageWrapper src={article} alt="" />
      <SpanStyle>Learning</SpanStyle>

      <h2
        css={css`
          color: black;
          font-weight: 500;
          font-size: 14px;
        `}
      >
        published 21 Dec 2023
      </h2>
      <h2
        css={css`
          color: black;
          font-weight: 700;
          font-size: 20px;
        `}
      >
        HTML & CSS foundations{" "}
      </h2>
      <p
        css={css`
          color: gray;
          font-size: 12px;
          margin-bottom: 70px;
        `}
      >
        These languages are the backbone of every website, defining structure,
        content, and presentatioins.
      </p>
      <div
        css={css`
          flex: 1;
        `}
      ></div>
      <ProfileStyle>
        <img
          css={css`
            width: 40px;
            height: 40px;
            margin-right: 8px;
          `}
          src={profileImage}
          alt=""
        />
        <h2
          css={css`
            color: black;
            font-size: 12px;
            font-weight: 700;
          `}
        >
          Greg Hooper
        </h2>
      </ProfileStyle>
    </ContentBackground>
  );
}

export default ContactPage;
