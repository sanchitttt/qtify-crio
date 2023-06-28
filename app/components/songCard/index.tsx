import Image from "next/image";

function SongCard({
    src, followers, title
}: {
    src: string,
    followers: number,
    title: string
}) {
    return (
        <div className='w-[159px] h-[232px] flex flex-col gap-[10px]'>
            <div className='flex flex-col rounded-t-[10px]'>
                <Image
                    src={src}
                    width={159}
                    height={170}
                    alt={title}
                />
                <div className='bg-white rounded-b-[10px] h-[50px] flex items-center justify-start'>
                    <div className='flex gap-[5px] text-[10px] leading-[15px] text-white bg-black py-[6px] px-[8px] rounded-full ml-[5px]'>
                        <div>{followers}</div>
                        <div>Follows</div>
                    </div>
                </div>
            </div>
            <div className='text-white text-[14px]'>
                {title}
            </div>
        </div>
    )
}

export default SongCard;