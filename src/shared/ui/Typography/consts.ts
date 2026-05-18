const typographyTypes = {
  title14: 'title-14',
  title16: 'title-16',
  title18: 'title-18',
  title30: 'title-30',
  subtitle16: 'subtitle-16',
  text12Lightgray1: 'text-12-lightgray-1',
  text12Lightgray2: 'text-12-lightgray-2',
  text14Lightgray: 'text-14-lightgray',
  text14White: 'text-14-white',
  text16Lightgray: 'text-16-lightgray',
  text16White: 'text-16-white',
  transaction: 'transaction',
  deltaPositive: 'delta-positive',
  deltaNagative: 'delta-negative',
} as const;

const typographyTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  p: 'p',
  span: 'span',
} as const;

const typographyProps = {
  types: typographyTypes,
  tags: typographyTags,
} as const;

export { typographyProps };
