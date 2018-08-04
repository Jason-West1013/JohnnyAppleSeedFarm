import React from "react";
import PropTypes from "prop-types";
import StyledLink from "./header_styles";

const NavButton = ({ navButtons, stateTop }) => {
  return navButtons.map(function(result, i) {
    return (
      <StyledLink
        altbar={stateTop ? "true" : undefined}
        to={result.navPath}
        delay={result.transDelay}
        in={stateTop}
        timeout={100000}
        key={i}
      >
        {result.page}
      </StyledLink>
    );
  });
};

NavButton.propTypes = {
  navButtons: PropTypes.arrayOf(Object),
  stateTop: PropTypes.bool
};

export default NavButton;
