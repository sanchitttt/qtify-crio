import Image from "next/image";

export function Logo() {
    return <Image
        src='/logo.svg'
        width={67}
        height={34}
        alt='Qtify Logo'
    />
}