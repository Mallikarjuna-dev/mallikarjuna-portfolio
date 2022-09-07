import React from "react";
import {
  StatsContCont,
  StatsCont,
  StatsContDiv,
  StatsContH1,
  StatsContH3,
  LastStat,
} from "./Styles";
import { Container } from "../../SharedStyles/SharedStyles";
const Stats = () => {
  return (
    <Container>
      <StatsContCont>
        <StatsCont>
          <StatsContDiv>
            <StatsContH1>1250+</StatsContH1>
            <StatsContH3>Hours of coding</StatsContH3>
          </StatsContDiv>
          <StatsContDiv>
            <StatsContH1>150+</StatsContH1>
            <StatsContH3>Git Commits</StatsContH3>
          </StatsContDiv>
          <StatsContDiv>
            <StatsContH1>7+</StatsContH1>
            <StatsContH3>Projects</StatsContH3>
          </StatsContDiv>
          <LastStat>
            <StatsContH1>120+</StatsContH1>
            <StatsContH3>Hours of Soft Skill</StatsContH3>
          </LastStat>
        </StatsCont>
      </StatsContCont>
      <br />
      <br />
      <br />
      <br />
      <br />
      <img
        src="https://ghchart.rshah.org/021F34/Mallikarjuna-dev"
        alt="Activity on GitHub"
        style={{ width: "80%", display: "block", margin: "auto" }}
      />
    </Container>
  );
};
export default Stats;
