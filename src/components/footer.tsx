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
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.333 3.608 1.31.975.977 1.247 2.246 1.31 3.611.058 1.265.068 1.645.068 4.846s-.01 3.584-.068 4.849c-.063 1.366-.335 2.633-1.31 3.608-.975.975-2.244 1.247-3.608 1.31-1.265.058-1.645.068-4.849.068s-3.584-.01-4.849-.068c-1.366-.063-2.633-.335-3.608-1.31-.975-.975-1.247-2.244-1.31-3.608-.058-1.265-.068-1.645-.068-4.849s.01-3.584.068-4.849c.063-1.365.335-2.633 1.31-3.608.975-.975 2.244-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.747 0 8.333.012 7.052.07 5.77.128 4.68.42 3.757 1.344c-.923.923-1.216 2.014-1.274 3.296C2.012 5.923 2 6.337 2 9.59c0 3.253.012 3.667.07 4.949.058 1.282.35 2.373 1.274 3.296.923.923 2.014 1.216 3.296 1.274 1.282.058 1.696.07 4.949.07s3.667-.012 4.949-.07c1.282-.058 2.373-.351 3.296-1.274.923-.923 1.216-2.014 1.274-3.296.058-1.282.07-1.696.07-4.949s-.012-3.667-.07-4.949c-.058-1.282-.351-2.373-1.274-3.296-.923-.923-2.014-1.216-3.296-1.274C15.667.012 15.253 0 12 0zM12 5.838a6.162 6.162 0 1 0 6.162 6.162A6.168 6.168 0 0 0 12 5.838zm0 10.17a4.007 4.007 0 1 1 4.007-4.007A4.013 4.013 0 0 1 12 16.008zm6.406-11.845a1.44 1.44 0 1 1-1.44-1.44 1.438 1.438 0 0 1 1.44 1.44z"
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
        <SocialIconFacebook className="size-4" />
      </Link>
      <Link
        href="https://wa.me/+5571996442491"
        target="_blank"
        aria-label="Converse com a gente!"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconWhatsApp className="size-4" />
      </Link>
      <Link
        href="https://www.instagram.com/animai.festival"
        target="_blank"
        aria-label="Nos visite no Facebook"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconInstagram className="size-4" />
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
        <div className="absolute inset-2 rounded-4xl bg-white/80" />
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
