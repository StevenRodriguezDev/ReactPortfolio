// import {useLocation } from 'react-router-dom';

function Footer() {
    // const currentPage = useLocation().pathname; // Removed the eslint comment

    return (
    <>
        <footer>
          <nav className="footer-links">
          <ul className="footer__social">
                <div className="footer-link">
                    {/* <p className="footer-name">Steven Rodriguez</p> */}
                    <a className="nav-item" href="#top">Back to Top</a>
                    
                    <a href="https://www.linkedin.com/"target="_blank"className="home__social-link" rel="noreferrer">

                    <i className="bx bxl-linkedin-square"></i>

                    </a>
                    <a href="https://github.com/StevenRodriguezDev/"target="_blank"className="home__social-link" rel="noreferrer">

                    <i className="bx bxl-github"></i>
                    
                    </a>
                    <span className="footer__copy"> &#169; Steven Rodriguez. All rigths reserved</span>
            
                </div>
            </ul>
            </nav>
        </footer>
    </>
    );
}

export default Footer;
