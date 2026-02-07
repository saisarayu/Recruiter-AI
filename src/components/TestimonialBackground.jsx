export function TestimonialBackground({ children }) {
  return (
    <section className="relative w-full bg-black overflow-hidden py-28">
      <div className="absolute -top-[220px] -right-[220px] h-[360px] w-[360px] rounded-full bg-[#4A4A4A]" />
      <div className="absolute -bottom-[220px] -left-[220px] h-[360px] w-[360px] rounded-full bg-[#4A4A4A]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {children}
      </div>
    </section>
  );
}