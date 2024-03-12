import Link from 'next/link'



export default function Header() {
  return (
    <div className='w-full h-24 bg-light-Background-color text-xl'>
        <ul className='h-full flex justify-around items-center'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/projects"}>Projects</Link></li>
            <li><Link href={"/info"}>Info</Link></li>
            <li><Link href={"/contact"}>Contact</Link></li>
        </ul>
    </div>
  )
}