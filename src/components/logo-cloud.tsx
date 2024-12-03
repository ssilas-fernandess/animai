import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
      <>
          <h2 className="text-center text-lg/8 font-semibold text-gray-900">
              Parceiros
          </h2>
          <div
              className={clsx(
                  className,
                  'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
              )}
          >
              <img
                  alt="SavvyCal"
                  src="https://irdeb.ba.gov.br/imgs/LOGO_IRDEB_HOME.png"
                  className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
              />
              <img
                  alt="Laravel"
                  src="https://www.bnb.gov.br/o/bnb-dxp-theme/images/logo-bnb.svg"
                  className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
              />
          </div>
      </>
  )
}
