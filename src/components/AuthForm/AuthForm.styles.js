import styled from 'styled-components';

export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3em;
  width: 70%;
  max-width: 25em;
`;

export const StyledInput = styled.input`
  &[data-valid='false'] {
    box-shadow: 0 0 5px 3px red;
    outline: none;
  }
  &[data-valid='true'] {
    box-shadow: 0 0 5px 3px green;
    outline: none;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const RevealPasswordIcon = styled.label`
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -0.5em;
  bottom: 0;
  user-select: none;
  cursor: pointer;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  line-height: 1.3em;
  bottom: -0.7em;
  transform: translateY(100%);
  right: 0;
  left: 0;
  margin: auto;
  font-size: 0.8em;
`;
