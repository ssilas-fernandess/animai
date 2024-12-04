import {Container} from "@/components/container";
import {Navbar} from "@/components/navbar";
import {Link} from "@/components/link";
import {ChevronRightIcon} from "@heroicons/react/16/solid";
import {Gradient} from "@/components/gradient";

export default function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/o-festival"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
            >
              Ministério da Cultura e Governo da Bahia apresentam
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pb-12 pt-8 sm:pb-16 sm:pt-12 md:pb-24 md:pt-16">
          <img src="/logo.png" alt="logo" className="h-72" />
        </div>
      </Container>
    </div>
  )
}
