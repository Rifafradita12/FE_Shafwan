import style from './Footer.module.css';

function Footer() {
  return (
    <footer className={style.footer}>
      <h2 className={style.footer__title}>🎬 Movie App</h2>
      <p className={style.footer__author}>Created by Muhammad Khalid Shafwan I</p>
      <p className={style.footer__copyright}>
        © {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
