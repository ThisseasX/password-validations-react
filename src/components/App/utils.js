import {
  makeValidate,
  hasCapitalLetter,
  hasLowerCaseLetter,
  hasNumber,
  hasSymbol,
} from 'validations';

import { clamp } from 'lodash/fp';

import classes from './styles.module.css';

export const validate = makeValidate([
  hasCapitalLetter,
  hasLowerCaseLetter,
  hasNumber,
  hasSymbol,
]);

export const getStrengthLabel = (strength) =>
  ({
    0: 'Weak',
    1: 'Fair',
    2: 'Good',
    3: 'Strong',
    4: 'Very Strong',
  }[strength] || (strength > 4 ? 'Very Strong' : 'Weak'));

export const getStrengthClassName = (strength) =>
  classes[`strength_${clamp(0, 4, strength)}`];
