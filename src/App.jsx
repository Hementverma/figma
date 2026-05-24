import './index.css'
import BannerImage from "./assets/BannerImage.png";
import Hassle from "./assets/Hassle.png";
//import Hero from "./assets/hero.png";
import Regulatory from "./assets/regulatory.png";
import Risk from "./assets/risk.png";
import SectionImage from "./assets/sectionImage.png";
import UnderlineVector from "./assets/underline-Vector.png";
import Vector from "./assets/Vector.png";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">

      {/* Navbar */}
      <nav className="w-full bg-[#f5f5f7] border-b border-gray-200">

        <div
          className="
            max-w-[1440px]
            mx-auto

            h-[54px]
            md:h-[100px]

            px-4
            md:px-8
            lg:px-14

            flex
            items-center
            justify-between
          "
        >

          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">

            <img
              src={logo}
              alt="logo"
              className="
                w-[158.71px]
                h-[58px]
                object-contain
              "
            />

          </div>

          {/* Menu */}
          <ul
            className="
              hidden
              lg:flex

              items-center

              gap-5
              lg:gap-10

              text-[13px]
              lg:text-[15px]

              font-medium
              text-black
            "
          >

            <li className="text-[#4F5DE4]">Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Contact</li>

          </ul>

          {/* Menu + Contact Button */}
          <div className="flex items-center gap-3">

            {/* Contact Button */}
            <button
              className="
                hidden md:flex

                bg-[#4F5DE4]
                text-white

                rounded-lg

                items-center
                justify-center

                gap-2

                transition-all
                duration-300

                hover:bg-[#3d4bdd]

                px-3 py-2
                md:px-5 md:py-3

                text-[12px]
                md:text-[14px]
              "
            >

              {/* Phone Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-4 h-4 opacity-80"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 4.5c0 9.941 8.059 18 18 18h2.25a1.5 1.5 0 001.5-1.5v-3.75a1.5 1.5 0 00-1.28-1.482l-4.125-.59a1.5 1.5 0 00-1.516.64l-.903 1.204a12.042 12.042 0 01-5.482-5.482l1.204-.903a1.5 1.5 0 00.64-1.516l-.59-4.125A1.5 1.5 0 009.75 3H6A1.5 1.5 0 004.5 4.5v0z"
                />
              </svg>

              <span>
                Contact Us
              </span>

            </button>

            {/* Menu Icon */}
            <button
              className="
                flex lg:hidden

                items-center
                justify-center

                w-[38px]
                h-[38px]

                rounded-md
              "
            >

              <div className="space-y-1">

                <div className="w-5 h-[2px] bg-black rounded-full"></div>
                <div className="w-5 h-[2px] bg-black rounded-full"></div>
                <div className="w-5 h-[2px] bg-black rounded-full"></div>

              </div>

            </button>

          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 lg:px-20 py-10 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left Content */}
        <div className="max-w-xl">

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Simplifying
            <br />

            <span className="relative inline-block text-indigo-600">

              Compliance

              {/* Underline Image */}
              <img
                src={UnderlineVector}
                alt="underline"
                className="
                  absolute
                  left-0
                  -bottom-3

                  w-full
                "
              />

            </span>

            {' '}For
            <br />
            Research Analysts
          </h1>

          <p className="mt-8 text-gray-700 leading-8 text-lg">
            Stay Focused On Your Insights—We'll Handle The Compliance.
            Our Expert Solutions Ensure Your Research Practices Meet Every
            Regulatory Requirement With Confidence And Ease
          </p>

          {/* Points */}
          <div className="mt-8 space-y-4">

            {[
              "End-To-End Compliance Support",
              "Regulatory Filings Made Simple",
              "Tailored Solutions For Independent Analysts & Firms"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">

                <div
                  className="
                    w-6 h-6
                    bg-indigo-600
                    rounded-full

                    flex
                    items-center
                    justify-center
                  "
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="white"
                    className="w-3 h-3 opacity-90"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                </div>

                <p>{item}</p>

              </div>
            ))}

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">

            <button
              className="
                w-[213px]
                h-11.5

                bg-indigo-600
                text-white

                rounded-lg
                text-lg
                font-medium
              "
            >
              Get Started
            </button>

            <button
              className="
                w-[213px]
                h-11.5
                border-2
                border-indigo-600

                text-indigo-600

                rounded-lg
                text-lg
                font-medium
              "
            >
              Book A Consultation
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="relative h-151.75 w-[739.13px]">

          <img
            src={BannerImage}
            alt="banner"
            className="w-full h-full object-contain"
          />

        </div>

      </section>

      {/* Why Compliance Section */}
      <section className="px-6 lg:px-20 py-20 bg-[#f5f5f7]">

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left Side */}
          <div>

            {/* Heading */}
            <div className="relative inline-block">

              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">

                Why{" "}

                <span className="text-[#4F5DE4]">
                  Compliance Matters
                </span>

                <br />

                For Research Analysts

              </h2>

              {/* Arrow Image */}
              <img
                src={Vector}
                alt="arrow"
                className="
                  absolute
                  -right-10
                  top-20

                  w-16
                  lg:w-20
                "
              />

            </div>

            {/* Main Illustration */}
            <div className="mt-14">

              <img
                src={SectionImage}
                alt="section"
                className="w-full max-w-125"
              />

            </div>

          </div>

          {/* Right Side */}
          <div>

            <p
              className="
                text-[#1E1E1E]
                text-lg
                leading-9
              "
            >
              In Today’s Regulatory Environment, Even A Small
              Oversight Can Lead To Penalties, Reputational Risks,
              And Loss Of Client Trust. We Help Research Analysts
              And Firms Navigate Complex Compliance Requirements
              So They Can Focus On Delivering High-Quality
              Research Without Worry.
            </p>

            {/* Cards */}
            <div className="mt-12 space-y-6">

              {/* Card 1 */}
              <div
                className="
                  bg-white
                  border
                  border-[#E5E7EB]

                  rounded-2xl

                  p-6

                  flex
                  gap-5
                "
              >

                <img
                  src={Regulatory}
                  alt="icon"
                  className="w-10 h-10"
                />

                <div>

                  <h3 className="text-2xl font-semibold">
                    Regulatory Clarity
                  </h3>

                  <p className="mt-3 text-gray-700 leading-8">
                    We Decode Complex Compliance Rules Into
                    Simple, Actionable Steps.
                  </p>

                </div>

              </div>

              {/* Card 2 */}
              <div
                className="
                  bg-white
                  border
                  border-[#E5E7EB]

                  rounded-2xl

                  p-6

                  flex
                  gap-5
                "
              >

                <img
                  src={Hassle}
                  alt="icon"
                  className="w-10 h-10"
                />

                <div>

                  <h3 className="text-2xl font-semibold">
                    Hassle-Free Filings Clarity
                  </h3>

                  <p className="mt-3 text-gray-700 leading-8">
                    From Registration To Ongoing Reporting—
                    We Manage It End-To-End.
                  </p>

                </div>

              </div>

              {/* Card 3 */}
              <div
                className="
                  bg-white
                  border
                  border-[#E5E7EB]

                  rounded-2xl

                  p-6

                  flex
                  gap-5
                "
              >

                <img
                  src={Risk}
                  alt="icon"
                  className="w-10 h-10"
                />

                <div>

                  <h3 className="text-2xl font-semibold">
                    Risk Protection
                  </h3>

                  <p className="mt-3 text-gray-700 leading-8">
                    Stay Ahead Of Audits, Inspections, And
                    Compliance Gaps With Proactive Support.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default App