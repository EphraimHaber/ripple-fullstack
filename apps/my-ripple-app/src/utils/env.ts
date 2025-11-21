export function getMockApi(): boolean {
  return import.meta.env.VITE_MOCK_API === 'true';
}

