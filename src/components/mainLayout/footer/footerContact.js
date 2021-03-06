import React from "react";
import "../../../css/mainLayout/footer/footer.css"

export default class FooterContact extends React.Component{
    render(){
        return(
            <div className="footer-social-icons col-md-4 col-xs-4">
                <h4>I miei contatti</h4>
                <ul className="social-icons">
                    <li><a href="https://www.facebook.com/andrea.minniti7" target="_blank" className="social-icon"><span>Facebook</span><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/marco-andrea-minniti-ab6564112/" target="_blank" className="social-icon"><span>Linkedin</span><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/druccio7/" target="_blank" className="social-icon"><span>Instagram</span><i className="fa fa-instagram"></i></a></li>
                    <li><a href="" className="social-icon"><span>Email</span><i className="fa fa-google"></i></a></li>
                </ul>
            </div>
        );
    }
}