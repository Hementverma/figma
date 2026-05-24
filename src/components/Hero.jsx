const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-16 py-20">
      <span className="bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
        Modern SaaS Platform
      </span>

      <h1 className="text-4xl md:text-7xl font-bold leading-tight max-w-5xl">
        Build Faster With Modern UI Experience
      </h1>

      <p className="mt-6 text-gray-400 max-w-2xl text-base md:text-lg leading-8">
        Create beautiful responsive interfaces with React and Tailwind CSS.
        Pixel perfect layouts for every screen size.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
          Start Free
        </button>

        <button className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/10 transition">
          Learn More
        </button>
      </div>

      <div className="mt-20 w-full max-w-6xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-lg">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
          alt="dashboard"
          className="rounded-2xl w-full"
        />
      </div>
    </section>
  )
}

export default Hero