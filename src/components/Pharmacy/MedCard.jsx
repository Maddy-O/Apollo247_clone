import { Link } from "react-router-dom";
import styled from "styled-components";

export const MedCard = ({ id, imageUrl, title, price }) => {
  const StyledLink = styled(Link)`
    border: 1px solid black;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    color: black !important;
    background-color: tomato;
    width: 300px;
  `;

  return (
    <StyledLink to={`/phamacy`}>
      <div className="MedCard">
        <div>
          <img src={imageUrl} style={{ width: "500px" }} alt="#" />
        </div>
        <div>
          <h2 className="title">{title}</h2>
        </div>
      </div>
    </StyledLink>
  );
};
