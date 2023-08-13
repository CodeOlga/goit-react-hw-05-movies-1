import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
// import { FaSun, FaMoon } from 'react-icons/fa';

import { useTheme } from 'ThemeContext'; 
import { Header, Nav, LayoutContainer, ToggleButton } from "./Layout.styled";

const Layout = () => {

  const { isDarkTheme, toggleTheme } = useTheme(); 
  return (
    <LayoutContainer $isDarkTheme={isDarkTheme}>
      <Header $isDarkTheme={isDarkTheme}>
      <Nav >
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
      </Nav>

        <ToggleButton onClick={toggleTheme}>
          {isDarkTheme ? "☀️" : "🌙"}
           {/* {isDarkTheme ? <FaSun /> : <FaMoon />} */}
        </ToggleButton>
      </Header>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </LayoutContainer>
  )
}

export default Layout;