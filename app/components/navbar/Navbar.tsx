import Button from "../Button"
import Searchbar from "../Searchbar"
import { Logo } from "../icons"

function Navbar() {
    return (
        <div className='bg-green w-[100vw] h-[74px] flex items-center justify-between px-[20px]'>
            <Logo />
            <Searchbar />
            <Button>Give Feedback</Button>
        </div>
    )
}

export default Navbar