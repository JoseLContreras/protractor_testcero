import { defineSupportCode } from 'cucumber';

defineSupportCode(({setDefaultTimeout}) => {
    setDefaultTimeout(450000);
});