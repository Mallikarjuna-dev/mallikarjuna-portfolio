import styled from "styled-components";

export const StatsContCont = styled.div`
  color: ${(props) => props.theme.fontColorPrimary};
  padding: 1em 0;
  margin: 0 auto;

  /* border-bottom: 1px solid #e7e7e7; */
`;

export const StatsCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
`;

export const StatsContDiv = styled.div`
  border-right: 1px solid #eaeaea;
  padding: 0 1em;
  flex-grow: 1;
  text-align: center;
`;

export const StatsContH1 = styled.h1`
  font-size: 3em;
  font-weight: 800;
  line-height: 1.14em;
  letter-spacing: -0.05em;
  /* font-family: 'Inter',"sans-serif"; */
  margin: 0.3em 0;
`;

export const StatsContH3 = styled.h3`
  font-size: 14px;
  font-weight: 600;
  -webkit-letter-spacing: 0.1em;
  -moz-letter-spacing: 0.1em;
  -ms-letter-spacing: 0.1em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  /* color:#666; */

  color: ${(props) => props.theme.fontColorSecondary};
  /* font-family: 'Inter',"sans-serif"; */
`;

export const LastStat = styled.div`
  border-right: 1px solid #eaeaea;
  padding: 0 1em;
  flex-grow: 1;
  text-align: center;
  border-right: none;
`;
