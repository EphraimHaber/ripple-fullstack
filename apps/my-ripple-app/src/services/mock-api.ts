import type { User } from '../types.ripple';

const mockUsers: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

export async function mockGetAllUsers(options?: { simulateDelay?: boolean; simulateError?: boolean }): Promise<User[]> {
  if (options?.simulateError) {
    throw new Error('Failed to fetch users');
  }
  
  if (options?.simulateDelay) {
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  return Promise.resolve(mockUsers);
}

export async function mockGetUserById(id: number, options?: { simulateDelay?: boolean; simulateError?: boolean }): Promise<User | undefined> {
  if (options?.simulateError) {
    throw new Error('Failed to fetch user data');
  }
  
  if (options?.simulateDelay) {
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  const user = mockUsers.find(u => u.id === id);
  if (!user) {
    throw new Error('User not found');
  }
  
  return Promise.resolve(user);
}

