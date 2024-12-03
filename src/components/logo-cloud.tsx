import { clsx } from 'clsx'
import {Heading} from "@/components/text";

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
      <>
        <Heading as="h2" className="max-w-3xl">
          Parceiros
        </Heading>
        <img
            alt="SavvyCal"
            src="./brands.png"
        />
      </>
  )
}
