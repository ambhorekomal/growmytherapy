import Image from 'next/image'

export default function Header() {
  return (
    <header className="px-8 py-8 max-w-[90rem] mx-auto">
      <div className="flex items-center gap-4 max-w-max">
        <Image
          src="https://storage.googleapis.com/a1aa/image/969ff020-36f9-4bf1-fa9e-55d96b5ab6b5.jpg"
          alt="Logo with geometric lines and circle in sage green color"
          width={48}
          height={48}
          className="w-12 h-12 object-contain"
        />
        <div className="text-[#3f4a3f] text-base leading-[1.3]">
          <p className="font-normal">Dr. Serena Blake, PsyD</p>
          <p className="font-normal">Clinical Psychologist</p>
        </div>
      </div>
    </header>
  )
}