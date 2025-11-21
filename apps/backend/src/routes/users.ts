import express from 'express';

const router = express.Router();

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

// Middleware to simulate delay
const simulateDelay = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const delayHeader = req.headers['x-delay'];
  if (delayHeader === 'true') {
    setTimeout(next, 3000);
  } else {
    next();
  }
};

// Middleware to simulate error
const simulateError = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const failHeader = req.headers['x-fail'];
  if (failHeader === 'true') {
    return res.status(500).json({ message: 'Failed to fetch user data' });
  }
  next();
};

// Get all users
router.get('/', simulateDelay, simulateError, (req, res) => {
  res.json(users);
});

// Get user by ID
router.get('/:id', simulateDelay, simulateError, (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  res.json(user);
});

export { router as userRouter };
