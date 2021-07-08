import React, { useState } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import UserModal from "./userModal";

const User = (props) => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <React.Fragment>
      <UserModal modalState={modal} toggle={handleModal} />
      <div className="container text-light row" style={{ marginTop: "30px" }}>
        <div className="container text-light col-3">
          <img
            src="https://www.dpair.com/wp-content/uploads/2017/03/Facebook-Blank-Photo.jpg"
            width="200"
            height="200"
            alt="dp"
          />
          <h1> 4v9_Senpai </h1>
          <p>Joined 01/01/2000</p>
        </div>
        <div className="container text-light col">
          <div className="container text-light row">
            <div className="container text-light col" style={{ padding: "0" }}>
              <h3>About Me</h3>
            </div>
            <button
              type="button"
              className="btn btn-warning col-2"
              onClick={handleModal}
            >
              Edit Profile
            </button>
          </div>
          <ReactReadMoreReadLess
            charLimit={700}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
          >
            lorem dadkasndas adasd adjnasd asdasjd asdjadad ajdaida sdasjdasida
            dasidjasdnasjd dhjahs adjasid sdnasd n adnnauisda lorem dadkasndas
            adasd adjnasd asdasjd asdjadad ajdaida sdasjdasida dasidjasdnasjd
            dhjahs adjasid sdnasd n adnnauisda lorem dadkasndas adasd adjnasd
            asdasjd asdjadad ajdaida sdasjdasida dasidjasdnasjd dhjahs adjasid
            sdnasd n adnnauisda lorem dadkasndas adasd adjnasd asdasjd asdjadad
            ajdaida sdasjdasida dasidjasdnasjd dhjahs adjasid sdnasd n
            adnnauisda lorem dadkasndas adasd adjnasd asdasjd asdjadad ajdaida
            sdasjdasida dasidjasdnasjd dhjahs adjasid sdnasd n adnnauisda lorem
            dadkasndas adasd adjnasd asdasjd asdjadad ajdaida sdasjdasida
            dasidjasdnasjd dhjahs adjasid sdnasd n adnnauisda dasd adjnasd
            asdasjd asdjadad ajdaida sdasjdasida dasidjasdnasjd dhjahs adjasid
            sdnasd n adnnauisda lorem dadkasndas adasd adjnasd asdasjd asdjadad
            ajdaida sdasjdasida dasidjasdnasjd dhjahs adjasid sdnasd n
            adnnauisda
          </ReactReadMoreReadLess>
        </div>
      </div>
      <h1 align="center"> I have watched 2 anime </h1>
      <br></br>
      <div className="container text-light row">
        <div className="container text-light col">
          <img
            src="https://cdn.myanimelist.net/images/anime/1000/110531.jpg"
            width="50"
            height="50"
            alt="animeimage"
          />
          <div>Naruto</div>
        </div>
        <div className="container text-light col">
          <div> this is my comment regarding this anime </div>
        </div>
        <div className="container text-light col">
          <div align="right"> 8.0/10 </div>
        </div>
      </div>
      <br></br>
      <div className="container text-light row">
        <div className="container text-light col">
          <img
            src="https://cdn.myanimelist.net/images/anime/1000/110531.jpg"
            width="50"
            height="50"
            alt="animeimage"
          />
          <div>Hyuoka</div>
        </div>
        <div className="container text-light col">
          <div> this is my comment regarding this anime </div>
        </div>
        <div className="container text-light col">
          <div align="right"> 8.0/10 </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default User;