import { isEmpty, isString } from 'lodash';

export const makeValidate = (rules) => (value) =>
  rules.reduce(
    (results, rule) => ({
      strength: results.strength + (isString(rule(value)) ? 0 : 1),
      error: isEmpty(results.error) ? rule(value) : results.error,
    }),
    {
      strength: 0,
      error: '',
    },
  );
