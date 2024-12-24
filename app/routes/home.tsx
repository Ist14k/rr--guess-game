import type { Route } from './+types/home';
import { Button } from '@/components/ui/button';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
      <h1 className='text-4xl'>Home Page for Guess Game</h1>
      <Button>Start Game</Button>
    </div>
  );
}
