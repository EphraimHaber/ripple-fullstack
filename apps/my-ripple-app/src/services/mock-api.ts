import type { User } from '../types.ripple';

const mockUsers: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

export async function mockGetAllUsers(options?: { simulateDelay?: boolean; simulateError?: boolean }): Promise<User[]> {
  
  if (options?.simulateDelay) {
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  if (options?.simulateError) {
    throw new Error('Failed to fetch users');
  }

  return Promise.resolve(mockUsers);
}

export async function mockGetUserById(id: number, options?: { simulateDelay?: boolean; simulateError?: boolean }): Promise<User | undefined> {
  
  if (options?.simulateDelay) {
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  if (options?.simulateError) {
    throw new Error('Failed to fetch user data');
  }
  
  const user = mockUsers.find(u => u.id === id);
  if (!user) {
    throw new Error('User not found');
  }
  
  return Promise.resolve(user);
}

