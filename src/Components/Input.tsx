import styled from "styled-components";

export const Field = styled.input`
  border-radius: 12px;
  padding: 12px;
  border-color: #dadada;
  border-width: 1px;
  width: 100%;
  margin-bottom: 10px;
  font-size: 15px;
  &:focus {
    border-radius: 12px;
    outline: none;
    border-color: #0f78d5;
  }
`;

export const PrimaryButton = styled.button`
  border-radius: 12px;
  background-color: #0f78d5;
  color: #fff;
  padding: 8px 24px;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease-in-out;
  font-size: 15px;
  &:hover {
    opacity: 0.9;
  }
`;

export const SecondaryButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 15px;
  background-color: ${(props) => (props.theme === "LIGHT" ? "#fff" : "#666")};
  color: ${(props) => (props.theme === "LIGHT" ? "#0d367f" : "#fff")};
  transition: all 0.2s ease-in-out;
`;

export const ThemeButton = styled.button`
  background: none;
  border: none;
  padding: 0 10px;
  color: ${(props) => (props.theme === "LIGHT" ? "#0d367f" : "#fff")};
  transition: all 0.2s ease-in-out;
  font-size: 16px;
`;

export const Select = styled.select`
  border-color: ${(props) => (props.theme === "LIGHT" ? "#fff" : "#666")};
  border-bottom-color: ${(props) =>
    props.theme === "LIGHT" ? "#000" : "#fff"};
  color: ${(props) => (props.theme === "LIGHT" ? "#000" : "#fff")};
  transition: all 0.2s ease-in-out;
  background: none;
  min-width: 100px;
  font-size: 15px;
`;
