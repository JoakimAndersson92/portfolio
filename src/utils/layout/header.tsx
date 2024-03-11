import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='w-full'>
        <ul className='flex justify-around'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/projects"}>Projects</Link></li>
            <li><Link href={"/info"}>Info</Link></li>
            <li><Link href={"/contact"}>Contact</Link></li>
        </ul>
    </div>
  )
}