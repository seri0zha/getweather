import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles['lds-ellipsis']}>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  )
};

export default Loader;
//this loader was taken from loading.io/css
