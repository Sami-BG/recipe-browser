import * as React from "react";
import { ReactComponent as AWSLogo } from "./Images/Amazon_Web_Services_Logo.svg";
import { ReactComponent as ReactLogo } from "./Images/React-icon.svg";
import { ReactComponent as ElasticLogo } from "./Images/Elasticsearch_logo.svg";
import { ReactComponent as NodeLogo } from "./Images/Node.js_logo.svg";
import "./AboutPage.css";

class AboutPage extends React.Component {
    render() {
        return (
            <div className={'about-page-container'}>
                <div className={'about-text'}>
                    Built using:
                </div>
                <div className={'about-logo-row'}>
                    <AWSLogo className={'about-logo'}/>
                    <ReactLogo className={'about-logo'}/>
                </div>
                <div className={'about-logo-row'}>
                    <ElasticLogo className={'about-logo'}/>
                    <NodeLogo className={'about-logo'}/>
                </div>
            </div>

        )
    }

}

export default AboutPage;