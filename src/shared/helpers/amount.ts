const isValidInputAmount = (amount: string) => {
  return (
    amount === '' || amount === '0' || /^(0|[1-9]\d*)(\.\d{0,2})?$/.test(amount)
  );
};

const isPositiveAmount = (amount: string) =>
  !Number(amount) || Number(amount) <= 0 ? false : true;

export { isValidInputAmount, isPositiveAmount };
