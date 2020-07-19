import React, { InputHTMLAttributes, useRef, useState, useCallback } from 'react';

import { Container } from './style';

type InputProps = InputHTMLAttributes<HTMLElement>;

const Input: React.FC<InputProps> = ({ type, value, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const increment = useCallback(() => {
    inputRef.current?.stepUp(1);
  }, []);

  const decrement = useCallback(() => {
    inputRef.current?.stepDown(1);
  }, []);

  return (
    <Container isFocused={isFocused}>
      {type === 'number' && (
        <button
          type="button"
          className="count-btn minus-count-btn"
          onClick={() => decrement()}
        >
          -
        </button>
      )}

      <div className="field-control">
        <input
          ref={inputRef}
          type={type}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
      </div>

      {type === 'number' && (
        <button
          type="button"
          className="count-btn plus-count-btn"
          onClick={() => increment()}
        >
          +
        </button>
      )}
    </Container>
  );
};

export default Input;
