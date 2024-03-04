
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop ";
import style from './Footer.module.scss'

export const Footer = () => {

    return (
        <footer>
          <div className={style.footer}>
         
            <section className={style.footerSection}>
            <p>Vi arbejder for at informere om korrect 
                affaldssortering. Ved at sortere hjælper du os,
                men også miljøey</p>
            </section>
            <section className={style.tradeMark}>
                <h4>©2023 Affaldsguiden</h4>
            </section>
            <ScrollToTop />

          </div>
        </footer>
      );
    };
