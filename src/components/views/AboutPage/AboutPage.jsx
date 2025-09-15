import styles from './AboutPage.module.scss';
import Footer from '../../layout/Footer/Footer';

export default function AboutPage() {
  return (
    <>
      <section id='about'>
        <div className='container'>
          <div className={styles.wrapperAbout}>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              libero!
            </h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              veritatis maxime in distinctio aperiam esse ipsa minus! Eum
              quisquam est vero, natus delectus voluptatum molestias ea porro
              expedita! Corrupti, nam.
            </p>
            <div className={styles.imagesRow}>
              <img src='' alt='' />
              <img src='' alt='' />
            </div>
            <div className={styles.buttonsRow}>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </div>
          <div className={styles.imageProfile}>
            <img src='' alt='' />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati, velit.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
