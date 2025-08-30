import { Button } from './button'
import { Container } from './container'
import { Link } from './link'
import { Logo } from './logo'
import { Subheading } from './text'

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
        className="text-white hover:text-animai-secondary transition-colors duration-300 hover-lift-organic"
      >
        <SocialIconFacebook className="size-5"/>
      </Link>
      <Link
        href="https://wa.me/+5571996442491"
        target="_blank"
        aria-label="Converse com a gente!"
        className="text-white hover:text-animai-secondary transition-colors duration-300 hover-lift-organic"
      >
        <SocialIconWhatsApp className="size-5"/>
      </Link>
      <Link
        href="https://www.instagram.com/animai.festival?igsh=Z2F2dTJzZWZtbGFm"
        target="_blank"
        aria-label="Nos visite no Instagram"
        className="text-white hover:text-animai-secondary transition-colors duration-300 hover-lift-organic"
      >
        <SocialIconInstagram className="size-5"/>
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm text-white/90">
      &copy; {new Date().getFullYear()} Animai.
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative bg-animai-organic">
      {/* Elementos orgânicos flutuantes */}
      <div className="organic-shapes">
        <div className="organic-shape"></div>
        <div className="organic-shape"></div>
        <div className="organic-shape"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="floating-organic">
                <img src="/logo.png" alt="logo" className="h-20"/>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center">
              <Copyright/>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-end">
              <div className="flex items-center gap-6">
                <SocialLinks/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
