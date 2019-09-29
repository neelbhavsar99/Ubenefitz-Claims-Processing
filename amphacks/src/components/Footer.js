import React, { Component } from "react";
import heart from '../hearts.png';

import '../style/footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>
                    Made with  <img src={heart} style={{ 'width': '1em' }} /> by
                    Case, Neel, Lola, and Amir
                </p>
                <div>Icons from <a style={{ 'color': 'black' }} href="https://www.flaticon.com/" title="Flaticon">flaticons</a></div>
            </div>
        );
    }
}

export default Footer;
