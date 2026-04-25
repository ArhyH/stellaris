const getCssVarOrNothing = (key: string, value: string) => {
  const nonEmpty = value ?? undefined;
  return nonEmpty !== undefined ? { [key]: `var(--${value})` } : undefined;
};

export { getCssVarOrNothing };
