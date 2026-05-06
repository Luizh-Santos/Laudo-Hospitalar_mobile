import { useState } from 'react';
import { routes } from '../routes';

export default function useSimpleNavigation() {
  const [stack, setStack] = useState(routes.login);
  return {
    current: stack[stack.length - 1],
    go: (screen) => setStack(prev => [...prev, screen]),
    reset: (screen) => setStack([screen]),
    back: () => setStack(prev => prev.length > 1 ? prev.slice(0, -1) : prev),
    canBack: stack.length > 1,
  };
}
