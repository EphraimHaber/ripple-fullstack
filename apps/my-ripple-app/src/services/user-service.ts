import type { User } from '../types.ripple';
import { getMockApi } from '../utils/env';
import { mockGetAllUsers, mockGetUserById } from './mock-api';

export async function getUserById(id: number, options?: { simulateDelay?: boolean; simulateError?: boolean }): Promise<User | undefined> {
    if (getMockApi()) {
        return mockGetUserById(id, options);
    }
    
    const headers: HeadersInit = {};
    if (options?.simulateDelay) headers['X-Delay'] = 'true';
    if (options?.simulateError) headers['X-Fail'] = 'true';
    
    const response = await fetch(`/api/users/${id}`, { headers });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch user data');
    }
    
    return response.json();
}

export async function getAllUsers(options?: { simulateDelay?: boolean; simulateError?: boolean }): Promise<User[]> {
    if (getMockApi()) {
        return mockGetAllUsers(options);
    }
    
    const headers: HeadersInit = {};
    if (options?.simulateDelay) headers['X-Delay'] = 'true';
    if (options?.simulateError) headers['X-Fail'] = 'true';
    
    const response = await fetch('/api/users', { headers });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch users');
    }
    
    return response.json();
}