import styled from "styled-components";

export const Header = styled.h1`
  margin: 40px 0;
  font-size: 28px;
  font-weight: normal;
`;

export const Error = styled.div`
  margin: 10px 0px;
  background-color: rgba(255, 0, 0, 0.7);
  color: #fff;
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 14px;
`;

export const StandardText = styled.p`
  font-size: 14px;
  margin: 10px 0;
  color: ${(props) => (props.theme === "LIGHT" ? "#444" : "#fff")};
  transition: all 0.2s ease-in-out;
`;

export const Link = styled.a`
  text-decoration: none;
  padding-left: 20px;
  font-size: 14px;
  color: ${(props) => (props.theme === "LIGHT" ? "#000" : "#fff")};
  transition: all 0.2s ease-in-out;
`;
