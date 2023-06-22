import React, { useState } from 'react';
import clsx from 'clsx';
import { validate, getStrengthLabel, getStrengthClassName } from './utils';
import classes from './styles.module.css';

const App = () => {
  const [input, setInput] = useState('');
  const [strength, setStrength] = useState(0);
  const [error, setError] = useState('');

  const label = getStrengthLabel(strength);
  const strengthClassName = getStrengthClassName(strength);

  const handleInput = ({ target: { value } }) => {
    setInput(value);

    if (!value) {
      setStrength(0);
      setError('');
    } else {
      const { strength, error } = validate(value);

      setStrength(strength);
      setError(error);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="input">Password:</label>
      </div>

      <div>
        <input id="input" value={input} onChange={handleInput} />
      </div>

      <div className={clsx(classes.strength, strengthClassName)}>{label}</div>
      <div className={classes.error}>{error}</div>
    </div>
  );
};

export default App;
