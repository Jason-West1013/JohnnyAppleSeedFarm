import React from "react";
import PropTypes from "prop-types";
import StyledLink from "./header_styles";

// The Link is handled in the styled-component file.
<<<<<<< HEAD
class NavButton extends Component {
  render() {
=======
const NavButton = ({ navButtons, stateTop }) => {
  return navButtons.map(function(result, i) {
>>>>>>> 71dffed573fb8d4b96d4715a85f1413cef7f80e4
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
