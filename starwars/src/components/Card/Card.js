import React from "react";
import styled from "styled-components";

import CardName from "./CardContent";

const CardWrap = styled.div`
  flex: 0 0 30%;
  font-family: sans-serif;
  font-size: 2rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 2%;
  text-align: left;
`;

export default function Card({
  character: {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender
  }
}) {
  return (
    <CardWrap>
      <CardName>
        Name: {name} <br />
        Height: {height} <br />
        Weight: {mass} <br />
        Hair Color: {hair_color} <br />
        Skin Color: {skin_color} <br />
        Eye Color: {eye_color} <br />
        BirthDate: {birth_year} <br />
        Gender: {gender} <br />
      </CardName>
    </CardWrap>
  );
}
