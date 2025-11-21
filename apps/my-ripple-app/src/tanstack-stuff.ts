import { createQuery, QueryClient, QueryClientProvider } from 'tanstack-ripple-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

export { createQuery, QueryClient, QueryClientProvider };
