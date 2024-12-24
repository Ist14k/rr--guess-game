import { Outlet } from 'react-router';

export default function layout() {
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
      <Outlet />
    </div>
  );
}
