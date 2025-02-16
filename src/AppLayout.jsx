import styles from './app.module.css';
import { Field } from './components/Field/Field';
import { Information } from './components/Information/Information';


export const AppLayout = () => {

  return (
    <div className={styles.app}>
      <Field />
      <Information />

    </div>
  );
}