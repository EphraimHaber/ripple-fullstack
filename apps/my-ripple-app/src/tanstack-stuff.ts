import { createQuery, QueryClient, QueryClientProvider } from 'tanstack-ripple-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			staleTime: 5 * 60 * 1000, // 5 minutes
		},
	},
});

export { createQuery, QueryClient, QueryClientProvider };
