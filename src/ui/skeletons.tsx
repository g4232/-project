export default function Canvasskeleton() {
  return (
    <div className='w-[70%] h-[80%] shadow-2xl shadow-orange-500 flex-col justify-center items-center align-middle content-center'>
      <div className='flex-1 w-100 h-10 flex justify-center'>
        <h1 className="text-2xl text-amber-300">未来战士</h1>
      </div>
      <div className='flex-1 w-100 h-10 flex justify-center'>
        <p className='text-orange-500 text-xl'>Loading...</p>
      </div>
    </div>
  )
}
