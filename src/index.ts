import { update } from './renderer';
import 'reset-css';

const rootElement = document.getElementById('root');

const main = () => {
  if (!rootElement) {
    throw new Error('Application failure: no root element!');
  }
  update(rootElement);
};

// document.getElementById('main');

main();
