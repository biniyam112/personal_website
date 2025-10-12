// Allow importing CSS files (global and module) and common static assets in TS/TSX files
declare module '*.css';
declare module '*.scss';
declare module '*.sass';

// Images
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg' {
  const content: string;
  export default content;
}

// Allow importing other static file types if needed
declare module '*.pdf';

export {};
