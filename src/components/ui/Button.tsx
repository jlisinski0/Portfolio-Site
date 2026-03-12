export default function Button({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
	return (
		<a {...props} className='cursor-pointer bg-black text-white rounded-2xl px-4 py-2  hover:bg-black/80 transition-colors duration-300'>
			{children}
		</a>
	)
}
