import React, { Component } from 'react';
import {InfoCard, Section} from "./section"

class ProjectSection extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Section height="85" background="#fab297" title="Projects">
        <div className="project">
        </div>
      </Section>
    );
  }
}

export default ProjectSection;
