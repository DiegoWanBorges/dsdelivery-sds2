import './style.css';
import { ReactComponent as YouTube } from './youtube.svg'
import { ReactComponent as Instagram } from './instagram.svg'
import { ReactComponent as Linkedin } from './linkedin.svg'
function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="www.youtube.com.br" target="_new" >
                    <YouTube/>
                </a>
                <a href="www.linkedin.com.br" target="_new" >
                    <Linkedin/>
                </a>
                <a href="www.instagran.com.br" target="_new" >
                    <Instagram/>
                </a>
            </div>
        </footer>
    )
}
export default Footer