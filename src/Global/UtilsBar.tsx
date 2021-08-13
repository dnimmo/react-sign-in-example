import { ChangeEvent } from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";
import { OppositeEnds } from "../Components/Layout";
import { Link } from "../Components/General";
import { ThemeButton, Select } from "../Components/Input";
import { useGlobal } from "./Context/Provider";
import Theme from "./theme";
import Language, { languages, getLanguage } from "./language";

const UtilsContainer = styled.div`
  padding: 20px 10px;

  @media (min-width: 460px) {
    padding: 20px 0;
  }
`;

const SettingsContainer = styled.div``;

const LinksContainer = styled.div``;

const ThemeIcon = (theme: Theme) =>
  theme.kind === "LIGHT" ? <FaSun /> : <FaMoon />;

const UtilsBar = (theme: Theme, language: Language) => {
  const { changeTheme, changeLanguage } = useGlobal();

  return (
    <UtilsContainer>
      <OppositeEnds>
        <SettingsContainer>
          <ThemeButton theme={theme.kind} type="button" onClick={changeTheme}>
            {ThemeIcon(theme)}
          </ThemeButton>
          <Select
            theme={theme.kind}
            aria-label="Select Language"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              changeLanguage(getLanguage(e.target.value, language));
            }}
          >
            <option>Select Language</option>
            {languages.map((language: Language) => (
              <option value={language.kind} key={language.kind}>
                {language.value}
              </option>
            ))}
          </Select>
        </SettingsContainer>
        <LinksContainer>
          <Link theme={theme.kind} href="/">
            Help
          </Link>
          <Link theme={theme.kind} href="/">
            Privacy
          </Link>
          <Link theme={theme.kind} href="/">
            Terms
          </Link>
        </LinksContainer>
      </OppositeEnds>
    </UtilsContainer>
  );
};

export default UtilsBar;
