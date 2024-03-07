
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop ";
import style from './Footer.module.scss'
import Logo from '../Logo/Logo';

export const Footer = () => {

    return (
        <footer>
          <div className={style.footer}>
            <section className={style.footerSection}>
            <Logo/>

            <p>Vi arbejder for at informere om korrect 
                affaldssortering. Ved at sortere hjælper du os,
                men også miljøey</p>
           
                <h4>©2023 Affaldsguiden</h4>
            </section>
            <ScrollToTop />

          </div>
        </footer>
      );
    };
