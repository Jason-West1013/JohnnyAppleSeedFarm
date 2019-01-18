import React, { Component } from "react";
import styled from "styled-components";
import color from "../../../constants/colors";

import appleCrisp from "../../../images/apple_crisp_scaled.png";
import appleSquares from "../../../images/apple_squares_scaled.jpg";
import peachCobbler from "../../../images/peach_cobbler_scaled.jpg";
import peachMuffins from "../../../images/peach_muffins_scaled.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    90deg,
    ${color.whitePrimary},
    ${color.greenLight},
    ${color.whitePrimary}
  );

  .row-1 {
    display: flex;
    margin: 3rem 0 1.5rem 0;
  }

  .row-2 {
    display: flex;
    margin: 1.5rem 0 3rem 0;
  }

  .image-container {
    margin: 0 1.5rem 0 1.5rem;
    height: 300px;
    width: 450px;
    overflow: hidden;
    cursor: pointer;
  }
`;

const RecipeImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;

  p {
    display: none;
    color: ${color.whitePrimary}
    font-size: 1.25rem;
    font-family: "Lato", sans-serif;
    text-shadow: 2px 2px 4px #000;
  }

  &:hover {
    transform: scale(1.2);
    p {
      display: block;
    }
  }
`;

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          name: "Apple Crisp",
          image: appleCrisp,
          recipe: "Apple Crisp Recipe",
          selected: false
        },
        {
          name: "Apple Squares",
          image: appleSquares,
          recipe: "Apple Squares Recipe",
          selected: false
        },
        {
          name: "Peach Cobbler",
          image: peachCobbler,
          recipe: "Peach Cobbler Recipe",
          selected: false
        },
        {
          name: "Peach Muffins",
          image: peachMuffins,
          recipe: "Peach Muffins Recipe",
          selected: false
        }
      ]
    };
  }

  render() {
    return (
      <Container>
        <div className="row-1">
          <RecipeButton recipes={this.state.recipes.slice(0, 2)} />
        </div>
        <div className="row-2">
          <RecipeButton recipes={this.state.recipes.slice(2, 4)} />
        </div>
      </Container>
    );
  }
}

const RecipeButton = ({ recipes }) => {
  const handleClick = el => {
    let recipeName = el.target.textContent;
    let object = recipes.find(object => object.name === recipeName);
    console.log(object.name);
  };

  return recipes.map(function(result, i) {
    return (
      <div className="image-container" onClick={handleClick} key={i}>
        <RecipeImage backgroundImage={result.image}>
          <p>{result.name}</p>
        </RecipeImage>
      </div>
    );
  });
};

export default Recipes;
