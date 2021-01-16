const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  'value'
).set;

const inputEvent = new Event('input', { bubbles: true });

export const useInput = () => {
  const triggerInputChangeEvent = (
    input = window.HTMLInputElement.prototype,
    value = ''
  ) => {
    nativeInputValueSetter.call(input, value);
    input.dispatchEvent(inputEvent);
  };

  return { triggerInputChangeEvent };
};
