import Image from 'next/image';

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <section className="relative h-screen w-screen overflow-clip">
      <div className="px-[9.313rem] pb-[3.313rem] pt-12">{children}</div>

      <div className="absolute inset-0 h-full w-full">
        <div className="absolute right-0 top-0 -z-10 h-1/2 w-1/2 opacity-80 mix-blend-overlay">
          <Image src="/grain.webp" alt="grain" fill />
        </div>
        <div className="absolute bottom-0 right-0 -z-10 h-1/2 w-1/2 opacity-80 mix-blend-overlay">
          <Image src="/grain.webp" alt="grain" fill />
        </div>
        <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-1/2 opacity-80 mix-blend-overlay">
          <Image src="/grain.webp" alt="grain" fill />
        </div>
        <div className="absolute left-0 top-0 -z-10 h-1/2 w-1/2 opacity-80 mix-blend-overlay">
          <Image src="/grain.webp" alt="grain" fill />
        </div>
        <div className="absolute right-0 top-0 -z-20 h-screen w-[874px] bg-[url('/mesh-gradient-5.webp')] bg-no-repeat dark:bg-[url('/bitmap.webp')]"></div>
      </div>
    </section>
  );
}