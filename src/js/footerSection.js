import React, { Component } from 'react';
import './../css/footer.css';

import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSquare, faCodeBranch, faEnvelope} from '@fortawesome/fontawesome-free-solid';
import { faGithub, faLinkedinIn } from '@fortawesome/fontawesome-free-brands';
fontawesome.library.add(faEnvelope, faSquare, faCodeBranch, faGithub, faLinkedinIn);


class Footer extends Component{
  constructor(props){
    super();
  }

  render() {
    return (
      <div style={{height:'30vh', backgroundColor:'#00cccc'}} className="container-fluid">
        <div className="footer row h-100 justify-content-center align-items-center">
          <div className="container-fluid">
            <div style={{fontSize:"10vh"}}>
              <a className="icon" href="https://github.com/vyangit" rel="noopener noreferrer" target="_blank">
                <span className="fa-layers fa-fw">
                  <FontAwesomeIcon icon="square" color="#303030" size="lg"/>
                  <FontAwesomeIcon icon={["fab", "github"]} color="white" size="sm"/>
                </span>
              </a>
              <a className="icon" href="https://www.linkedin.com/in/victorkyan/" rel="noopener noreferrer" target="_blank">
                <span className="fa-layers fa-fw">
                  <FontAwesomeIcon icon="square" color="#0077B5" size="lg"/>
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} color="white" size="sm"/>
                </span>
              </a>
              <a className="icon" href="https://github.com/vyangit/vyangit.github.io/tree/dev" rel="noopener noreferrer" target="_blank">
                <span className="fa-layers fa-fw">
                  <FontAwesomeIcon icon="square" color="orangered" size="lg"/>
                  <FontAwesomeIcon icon={["fas", "code-branch"]} color="white" size="sm"/>
                </span>
              </a>
            </div>
            <div style={{fontSize:"3vh"}}>
              	 &copy; 2019 Victor Yan
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
