export const isDevEnv = () => {
  if (!process.env) return false;
  return process.env.NODE_ENV === 'development';
};
