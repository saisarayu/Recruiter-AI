const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-black text-white">

      {/* LEFT SIDE - LOGO */}
      <h1 className="text-3xl font-bold text-purple-400">
        RecruiterAI
      </h1>

      {/* RIGHT SIDE - MENU + BUTTON */}
      <div className="flex items-center gap-10">

        <div className="hidden md:flex gap-10 text-gray-300">

          <a
            onClick={() =>
              document
                .getElementById("solution")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white cursor-pointer"
          >
            Solution
          </a>

          <a
            onClick={() =>
              document
                .getElementById("impact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white cursor-pointer"
          >
            Impact
          </a>

          <a
            onClick={() =>
              document
                .getElementById("testimonials")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white cursor-pointer"
          >
            Testimonials
          </a>

          <a
            onClick={() =>
              document
                .getElementById("faq")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white cursor-pointer"
          >
            FAQ
          </a>

        </div>

        <button
          onClick={() =>
            document
              .getElementById("cta")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-blue-500 px-5 py-2 rounded-full text-white"
        >
          Start Free Trial
        </button>

      </div>

    </nav>
  );
};

export default Navbar;
