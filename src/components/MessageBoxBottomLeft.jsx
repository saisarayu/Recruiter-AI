import msg3 from "../assets/msg3.png";

const MessageBoxBottomLeft = () => {
  return (
    <div
      className="absolute bottom-20 left-[18px] fade-in"
      style={{ animationDelay: "1.7s" }}
    >
      <img src={msg3} alt="testimonial bottom left" className="w-[400px]" />
    </div>
  );
};

export default MessageBoxBottomLeft;