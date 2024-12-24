import { Button } from '@/components/ui/button';
import React from 'react';

export const EndScreen = () => {
  return (
    <div className=''>
      <h1 className='text-xl'>The Computer has finished the game.</h1>
      <h1 className='text-xl'>The Computer is ready to play again.</h1>
      <div className='flex items-center gap-2 mt-2'>
        <Button variant='default' className='flex-1' disabled>
          Play Again
        </Button>
        <Button variant='destructive' className='flex-1'>
          Quit
        </Button>
      </div>
    </div>
  );
};
