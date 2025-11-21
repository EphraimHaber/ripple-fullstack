export function getBasePath(): string {
  return import.meta.env.VITE_BASE_PATH || '';
}

export function getRootPath(): string {
  const basePath = getBasePath();
  if (basePath === '' || basePath === '/') {
    return '';
  }
  return basePath;
}
 