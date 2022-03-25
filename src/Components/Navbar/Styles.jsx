import styled from "styled-components";

const NavBarDiv = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  position: sticky;
  width: 100%;
  top: 0px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  height: 65px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 460px) {
    // margin-left: -15px;
    width: 100%;
  padding-left: 10px;
  padding-right: 10px;
    //margin:auto;
    /* padding : 0px; */
  }
`;

export const NavBarDiv2 = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  position: fixed;
  width: 100%;
  top: 0px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  /* padding-left: 50px; */
  /* padding-right: 50px; */
  /* display: flex; */
  height: 68px;
  /* align-items: center; */
  /* justify-content: space-between; */
  @media (max-width: 440px) {
    /* margin-left: -35px; */
    width: 80%;
    height: 48px;
    /* padding : 0px; */
  }
`;

const NavBarRight = styled.ul`
  display: flex;
  word-wrap: break-word;
`;

const NavLink = styled.li`
  cursor: pointer;
  word-wrap: break-word;
  color: ${(props) => props.theme.fontColorPrimary};
  font-weight: 500;
  font-size: 18px;
  padding: 0 15px;
  display: block;
  &:hover {
    color: ${(props) => props.theme.socialIconColor};
  }
  @media (max-width: 640px) {
    font-size: 16px;
    padding: 0 5px;
  }

  @media (max-width: 445px) {
    font-size: 14px;
    padding: 0 10px 0 5px;
  }
`;

export { NavBarDiv, NavBarRight, NavLink };
