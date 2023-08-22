import './vendor';

import styles from './app.module.css';
import { makeItBlue } from './hello';

const root = document.getElementById('root');
root.className = styles.blue;

makeItBlue();
