
const Hero = () => {
  return (
  
<section
          className="relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("/images/Banner.jpeg")` }}
>
  <div
    className="absolute inset-0 xs:bg-transparent xs:from-white/50 xs:to-white/15 ltr:xs:bg-gradient-to-r rtl:xs:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl shadow-xl bg-white/50 rounded-lg p-8 text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-primary">
        Let us find your

        <strong className="block font-extrabold text-gray-600"> Forever Home. </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-800">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded transition-all duration-500 bg-gray-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-700 focus:outline-none focus:ring active:bg-gray-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded transition-all duration-500 bg-white px-12 py-3 text-sm font-medium text-gray-600 shadow hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero