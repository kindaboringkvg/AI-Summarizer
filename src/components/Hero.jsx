import {logo} from '../assets'

function Hero() {
  return (
    <div>
       <header className = "w-full justify center items-center flex flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src = {logo} alt="sumz_logo"
        className="w-28 object-contain"/>
        <button 
        type = "button"
        onClick={() => window.open('https://github.com/kindaboringkvg')}
        className="black_btn">
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
        </h1>     

        <h2 className="desc">
          Simplify your readings with Summize, an open-source article summarizer that transforms lengthy acticles into clear and concise summaries
        </h2>
    </header>
    </div>
  )
}

export default Hero
