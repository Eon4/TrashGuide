
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop ";
import style from './Footer.module.scss'
import Logo from '../Logo/Logo';

export const Footer = () => {
  
    return (
        <footer>
            {/* Container for the footer content */}
            <div className={style.footer}>
                {/* Section containing the logo, text, and copyright */}
                <section className={style.footerSection}>
                    <Logo/>
                    <p>Vi arbejder for at informere om korrekt affaldssortering. Ved at sortere hjælper du os, men også miljøet</p>
                    <h4>©2023 Affaldsguiden</h4> {/* Copyright information */}
                </section>
                <ScrollToTop /> 
            </div>
        </footer>
    );
};

