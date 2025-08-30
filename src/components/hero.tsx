import {Container} from "@/components/container";

export default function Hero() {
  return (
    <div className="relative bg-animai-organic py-2 sm:py-4 md:py-6 lg:py-8">
      {/* Elementos orgânicos flutuantes */}
      <div className="organic-shapes">
        <div className="organic-shape"></div>
        <div className="organic-shape"></div>
        <div className="organic-shape"></div>
      </div>
      
      <Container className="relative z-10">
        {/* Logo centralizada */}
        <div className="text-center pb-1 pt-1 sm:pb-2 sm:pt-2 md:pb-4 md:pt-4 lg:pb-6 lg:pt-6">
          <div className="floating-organic">
            <img 
              src="/logo.png" 
              alt="logo" 
              className="h-16 w-auto sm:h-20 md:h-24 lg:h-32 xl:h-36 mx-auto" 
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
