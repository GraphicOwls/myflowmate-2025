import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SquarePoint } from "@/components/SquarePoint";

const navLinks = [{ label: "Your Flowmate", href: "/your-flowmate" }];

export default function Header() {
  return (
    <nav className="border-stone-400 border-dashed border-b">
      <div className="max-w-[1608px] flex items-center justify-between mx-auto px-6 py-6 border-l border-stone-400 border-dashed border-r relative">
        <Link href="/">
          <Image
            src="/myflowmate.svg"
            alt="MyFlowMate Logo"
            width={160}
            height={60}
          />
        </Link>
        <ul className="flex items-center justify-end space-x-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                className="font-medium opacity-60 duration-150 hover:opacity-100 transition-opacity"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Button href="/#book-session">Get Started</Button>
          </li>
        </ul>
        <SquarePoint position="bottomLeft" />
        <SquarePoint position="bottomRight" />
      </div>
    </nav>
  );
}
