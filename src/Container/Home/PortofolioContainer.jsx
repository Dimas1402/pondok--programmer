import React from "react";
import Portofolio from "../../Components/Home/Portofolio/Portofolio"
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
// import web1 from "../../Assets/portofolio/"
// import images from "../../Component/Home/Portofolio/Data.json"

const images = [
//   "https://res.cloudinary.com/dy3wesqxd/image/upload/v1575200129/DImas%20nitip/osans-lp_rrywpb.png",  
  "https://res.cloudinary.com/dy3wesqxd/image/upload/v1575200129/DImas%20nitip/osans-lp_rrywpb.png",
  "https://res.cloudinary.com/dy3wesqxd/image/upload/v1575200131/DImas%20nitip/osans_w0szxk.png",
  "https://res.cloudinary.com/dy3wesqxd/image/upload/v1575200141/DImas%20nitip/beta_se4ixd.png",
  "https://i.pinimg.com/originals/b3/a9/6e/b3a96e628394e49a011610afa37ae896.png",
  "https://res.cloudinary.com/dy3wesqxd/image/upload/v1575200160/DImas%20nitip/aiwah_jlbwa0.png",
  "https://i.pinimg.com/originals/58/2d/22/582d2228ee92da0e24eff059294fe925.png",
  "https://i.pinimg.com/originals/e4/cd/ed/e4cded865191591c0ca5f250fda3c8a9.png",
  "https://i.pinimg.com/originals/a9/13/20/a91320f4d3828e04bbbfe575c77b3b11.png",
  "https://i.pinimg.com/originals/7c/44/d6/7c44d67c99467e1dc157dc5d954e2891.png"
];

class PortofolioContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: "",
      isOpen: false
    };
  }

  handleChange = res => {
      const foto = res.id
    this.setState({
      photoIndex:foto,  
      isOpen: true
    });
    console.log(this.state.photoIndex)
  };


  render() {
    const { photoIndex, isOpen } = this.state;
    return (
   
      <>
        <Portofolio handleChange={this.handleChange} />
        {isOpen && (
          <Lightbox 
            mainSrc={images[photoIndex]}
            nextSrc={images[photoIndex]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1 ) % images.length
              })
            }
          />
        )}
      </>
    );
  }
}

export default PortofolioContainer;