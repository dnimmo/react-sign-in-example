import styled from "styled-components";

export const SiteWrapper = styled.div`
  font-family: "Arial", sans-serif;
  line-height: 1.5em;
  min-height: 100vh;
  width: 100vw;
  display: grid;
  background-color: ${(props) => (props.theme === "LIGHT" ? "#fff" : "#333")};
  color: ${(props) => (props.theme === "LIGHT" ? "#000" : "#fff")};
  transition: all 0.2s ease-in-out;
`;

export const OppositeEnds = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ExtraTopSpacing = styled.div`
  margin-top: 40px;
`;

export const Container = styled.div`
  max-width: 420px;
  margin: auto auto;
  width: 100%;
`;

export const Page = styled.div`
  display: grid;
  grid-gap: 20px;
  min-height: 500px;
  border-radius: 12px;
  padding: 40px 20px;
  width: 100%;
  background-color: ${(props) => (props.theme === "LIGHT" ? "#fff" : "#666")};
  color: ${(props) => (props.theme === "LIGHT" ? "#000" : "#fff")};
  transition: all 0.2s ease-in-out;
  @media (min-width: 460px) {
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
  }
`;
