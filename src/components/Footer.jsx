export default function Footer() {
  return (
    <footer className="bg-[#404040] text-[#737373] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand Column */}
        <div>
          <h2 className="text-2xl font-bold text-[#3B82F6]">
            RecruiterAI
          </h2>

          <p className="mt-4 text-sm leading-relaxed">
            AI-powered recruiting that works like your own HR team.  
            Hire better, faster.
          </p>

          <div className="flex gap-3 mt-6">
            {["linkedin", "twitter", "github", "mail"].map((icon, i) => (
              <div
                key={i}
                className="
                  w-10 h-10
                  bg-[#737373]
                  rounded-lg
                  flex items-center justify-center
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:bg-[#3B82F6]
                "
              >
                <span className="text-white text-sm uppercase">
                  {icon[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>

          <ul className="space-y-2 text-sm">
            {["Features", "Pricing", "Integrations", "API", "Changelog"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-[#3B82F6] cursor-pointer transition-all"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>

          <ul className="space-y-2 text-sm">
            {["About", "Blog", "Careers", "Press", "Contact"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-[#3B82F6] cursor-pointer transition-all"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>

          <ul className="space-y-2 text-sm">
            {[
              "Documentation",
              "Help Center",
              "Community",
              "Privacy Policy",
              "Terms of Service",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-[#3B82F6] cursor-pointer transition-all"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-[#737373] pt-6 flex flex-col md:flex-row justify-between text-sm">
        <p>
          © 2026 RecruiterAI by OneSol AI Labs. All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          {["Privacy", "Terms", "Cookies"].map((item, i) => (
            <span
              key={i}
              className="hover:text-[#3B82F6] cursor-pointer transition-all"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
