import {Container} from "@/components/container";

export default function Hero() {
  return (
    <div className="relative bg-animai-organic py-4">
      {/* Elementos orgânicos flutuantes */}
      <div className="organic-shapes">
        <div className="organic-shape"></div>
        <div className="organic-shape"></div>
        <div className="organic-shape"></div>
      </div>
      
      <Container className="relative z-10">
        {/* Logo centralizada */}
        <div className="text-center pb-2 pt-1 sm:pb-4 sm:pt-2 md:pb-6 md:pt-4">
          <div className="floating-organic">
            <img src="/logo.png" alt="logo" className="h-24 sm:h-32 md:h-36 mx-auto" />
          </div>
        </div>
      </Container>
    </div>
  )
}
