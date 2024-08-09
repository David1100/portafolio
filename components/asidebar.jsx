import { RiInstagramFill,RiFacebookCircleFill,RiLinkedinBoxLine } from "react-icons/ri";

export default function Asidebar() {
    return (
        <>
            <nav className="flex flex-col gap-3 fixed top-1/2 left-3  rounded-full border-[1px] border-white list-none px-1 py-3">
                <li className="p-1 text-lg flex justify-center items-center">
                    <RiFacebookCircleFill />
                </li>
                {/* <li className="p-1 text-lg flex justify-center items-center">
                    <RiInstagramFill />
                </li> */}
                <li className="p-1 text-lg flex justify-center items-center">
                    <RiLinkedinBoxLine />
                </li>
            </nav>
        </>
    )
}