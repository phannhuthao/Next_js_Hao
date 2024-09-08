import styles from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>Logoipsum</div>
      <div className={styles.navlinks}>
        <a href="#">Home</a>
        <a href="#">Updates</a>
        <a href="#">Services</a>
        <a href="#">Features</a>
        <a href="#">About Us</a>
      </div>
      <div className={styles.profileIcon}>👤</div>
    </nav>
  );
};

export default Navigation;
