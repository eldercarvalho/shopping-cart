import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: stretch;
  /* height: 51px; */
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: 25px;
  transition: all 0.3s;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${props.theme.colors.primary};
    `}

  .field-control {
    flex: 1;

    input {
      display: block;
      width: 100%;
      height: 50px;
      font-size: 1.6rem;
      color: ${(props) => props.theme.colors.textColor};
      padding: 0 1.6rem;
      border: none;
      border-radius: 25px;
      -moz-appearance: textfield;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }

  .count-btn {
    background: ${(props) => props.theme.colors.primary};
    border: none;
    color: #fff;
    width: 50px;
    height: 50px;
    transition: all 0.3s;
    font-size: 2rem;

    &:hover {
      background: ${(props) => darken(0.1, props.theme.colors.primary)};
    }

    &.minus-count-btn {
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
    }

    &.plus-count-btn {
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
    }
  }
`;
