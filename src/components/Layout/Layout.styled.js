import styled, { css } from 'styled-components';

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${props => (props.$isDarkTheme ? 'black' : 'white')};
  color: ${props => (props.$isDarkTheme ? 'white' : 'black')};
`;

export const Header = styled.header`
  ${headerStyles}
`;

Header.displayName = 'Header';

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.$isDarkTheme ? 'black' : 'white')};
  color: ${props => (props.$isDarkTheme ? 'white' : 'black')};
`;

export const ToggleButton = styled.button`
  // background-color: transparent;
  background-color: purple;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
