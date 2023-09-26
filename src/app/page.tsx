import Hero from "./components/Hero/hero"
import CTABlock from "./components/CTABlock/CTABlock"
import Menu from "./components/Menu/Menu"
export default function Home() {

  return (
    <div className="container">
      <Menu />
      <div className="header">
        <h1 className="font-michroma gradient-text">CONGRATULATIONS</h1>
      </div>
      <Hero />
      <CTABlock />
      {/* Footer */}
    </div>
  )
}
