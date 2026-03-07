export default function Button({children}: {children: React.ReactNode} ){
    return (
        <button className='cursor-pointer bg-black text-white rounded-2xl px-4 py-2 mt-5 hover:bg-black/80 transition-colors duration-300'>{children}</button>
    )
}