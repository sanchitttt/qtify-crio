function Button({ children }: {
    children: React.ReactNode
}) {
    return (
        <button className='flex py-[5px] px-[10px] rounded-[10px] font-bold items-center justify-center bg-black text-[#34ca4b]'>
            {children}
        </button>
    )
}

export default Button