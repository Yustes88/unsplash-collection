import Image from "next/image";

export default function AuthLoading() {
  return (
    <div className="fixed inset-0 z-50 flex size-full items-center justify-center bg-white">
      <Image
        src="/images/Unsplash.svg"
        width={120}
        height={120}
        alt="Logo"
        className="animate-pulse duration-700"
      />
    </div>
  );
}
