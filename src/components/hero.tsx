import {Container} from "@/components/container";

export default function Hero() {
  return (
    <div className="relative bg-animai-organic py-2 relative">
      {/* Elementos orgânicos flutuantes */}
      <div className="organic-shapes">
        <div className="organic-shape"></div>
        <div className="organic-shape"></div>
        <div className="organic-shape"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center py-4">
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
