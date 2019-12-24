import React from "react";
import NavbarContainer from "../../Container/Navbar/NavbarContainer"

const WithNavbar = OriginalComponent => {
  class NewComponent extends React.Component {
    render() {
      return (
        <>
          <NavbarContainer/>
          <OriginalComponent />
        </>
      );
    }
  }
  return NewComponent;
};

export default WithNavbar;