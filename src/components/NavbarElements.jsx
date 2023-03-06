import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #041C32;
  height: 110px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((80vw - 1425px) / 2);
  z-index: 10;
  @media screen and (max-width: 1100px) {
    height: 230px;
  }

  @media screen and (max-width: 1450px) {
    padding: 0.5rem calc((80vw - 1050px) / 2);
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  text-decoration: none;
  padding: 0 0.5rem;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 1100px) {
    font-size: 2rem;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  font-size: 1.5rem;
  @media screen and (max-width: 1100px) {
    font-size: 5rem;
  }
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;