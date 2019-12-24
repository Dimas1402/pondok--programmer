import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

class NavbarContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      background: '',
      boxShadow: '',
      idnav:''
    }
  }

  listenScrollEvent = e => {
    if (window.scrollY > 300) {
      this.setState({ background:"#00aa88ff", boxShadow:"0 0 11px #7777", idnav:'navbar-one' });
    } else {
      this.setState({ background:"transparent", boxShadow:"", idnav:"" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render () {
    return (
      <Navbar
        background={this.state.background}
        boxShadow={this.state.boxShadow}
        idnav={this.state.idnav}
      />
    )
  }
}

export default NavbarContainer
