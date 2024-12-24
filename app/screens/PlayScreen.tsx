import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

export const PlayScreen = () => {
  return (
    <div>
      <Input type='number' placeholder='Enter your guess...' />
      <div className='w-full mt-2 flex items-center gap-2'>
        <Button variant='destructive' className='flex-1'>
          Reset
        </Button>
        <Button variant='default' className='flex-1'>
          Guess
        </Button>
      </div>
    </div>
  );
};
