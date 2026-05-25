declare module '*.module.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.global.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  const content: UtilityTypes.SvgContent;
  export default content;
}

namespace UtilityTypes {
  export type SvgContent = { id: string; viewBox: string };
}
