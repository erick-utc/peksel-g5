'use client'
import { title } from "@/components/primitives";
import { Image } from "@heroui/react";
import { Link } from "@heroui/react";

export default function RegisterPage() {
  return (
    <div className="w-full">
      <h1 className={title()}>Capacitaciones</h1>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-4">
        <Image
            alt="Peksel G5 Logo"
            src="/img/logo.png"
            width={200}
        />
        </div>
        <div className="col-span-8">
            <ul className="flex justify-between items-center h-full">
                <li><Link href="/capacitations">Capacitaciones</Link></li>
                <li><Link href="/capacitations">Cuestionarios</Link></li>
                <li><Link href="/capacitations">Herramientas</Link></li>
            </ul>
        </div>
        </div>
    </div>
  );
}