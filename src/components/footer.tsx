import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Button } from './button'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { Logo } from './logo'
import { Subheading } from './text'

function CallToAction() {
  return (
    <div className="relative pb-16 pt-20 text-center sm:py-24">
      <hgroup>
        <Subheading>Get started</Subheading>
        <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          Ready to dive in?
          <br />
          Start your free trial today.
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500">
        Get the cheat codes for selling and unlock your team&apos;s revenue
        potential.
      </p>
      <div className="mt-6">
        <Button className="w-full sm:w-auto" href="#">
          Get started
        </Button>
      </div>
    </div>
  )
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-gray-950 data-[hover]:text-gray-950/75"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>Product</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/pricing">Pricing</SitemapLink>
          <SitemapLink href="#">Analysis</SitemapLink>
          <SitemapLink href="#">API</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Company</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#">Careers</SitemapLink>
          <SitemapLink href="/blog">Blog</SitemapLink>
          <SitemapLink href="/company">Company</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Support</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#">Help center</SitemapLink>
          <SitemapLink href="#">Community</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Company</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#">Terms of service</SitemapLink>
          <SitemapLink href="#">Privacy policy</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialIconFacebook(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
      />
    </svg>
  )
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z"
      />
    </svg>
  )
}

function SocialIconWhatsApp(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        d="M17.472 14.807c-.297-.148-1.758-.867-2.029-.967-.271-.1-.469-.148-.667.148-.198.297-.767.966-.94 1.164-.173.198-.347.222-.644.074-.297-.148-1.255-.462-2.39-1.475-.883-.786-1.48-1.754-1.654-2.051-.173-.297-.018-.458.13-.606.133-.132.297-.347.446-.52.148-.173.198-.297.297-.495.099-.198.05-.37-.025-.519-.074-.148-.667-1.611-.914-2.208-.241-.579-.486-.5-.667-.51h-.567c-.198 0-.519.074-.792.37-.272.297-1.04 1.015-1.04 2.479 0 1.463 1.064 2.877 1.213 3.074.148.198 2.094 3.2 5.07 4.487.709.306 1.26.489 1.69.626.71.227 1.36.195 1.871.118.571-.085 1.758-.719 2.007-1.412.247-.694.247-1.287.173-1.412-.074-.125-.271-.198-.567-.347z"
      />
    </svg>
  )
}

function SocialIconInstagram(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://www.facebook.com/people/Animai-Festival/100067989279243/?locale=pt_BR"
        target="_blank"
        aria-label="Nos visite no Facebook"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconFacebook className="size-4"/>
      </Link>
      <Link
        href="https://wa.me/+5571996442491"
        target="_blank"
        aria-label="Converse com a gente!"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconWhatsApp className="size-4"/>
      </Link>
      <Link
        href="https://www.instagram.com/animai.festival"
        target="_blank"
        aria-label="Nos visite no Facebook"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconInstagram className="size-4"/>
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-950">
      &copy; {new Date().getFullYear()} Animai.
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/80"/>
        <Container>
          <PlusGrid className="py-8">
            <PlusGridRow>
              <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-2 flex">
                  <PlusGridItem className="pt-2 lg:pb-2">
                    <img src="/logo.png" alt="logo" className="h-24"/>
                  </PlusGridItem>
                </div>
              </div>
            </PlusGridRow>
            <PlusGridRow className="flex justify-between">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright/>
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-8 py-3">
                  <SocialLinks/>
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  )
}
