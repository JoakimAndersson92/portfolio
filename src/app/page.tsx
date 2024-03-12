import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="h-full">
      <div className="h-3/4 object-fit relative">
      <Image className="object-cover" src={'/portrait.jpeg'} alt="hero image" fill/>
      </div>
    </div>
  );
}
