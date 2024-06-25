'use client';


function LoadingPage() {
  return (
    <div className='flex min-h-screen justify-center items-center flex-col bg-white'>
      <div className='pb-4'>
        <h1 className="text-black">Just give us a second.</h1>
      </div>
      <div className='flex justify-center items-center'>
        <span className='loading loading-ring loading-lg text-black'></span>
      </div>
    </div>
  );
}

export default LoadingPage;