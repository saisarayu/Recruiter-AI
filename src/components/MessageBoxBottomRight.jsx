import msg2 from "../assets/msg2.png";

const MessageBoxRight = () => {
  return (
    <div
      className="absolute top-0 right-[50px] fade-in"
      style={{ animationDelay: "1s" }}
    >
      <img src={msg2} alt="testimonial right" className="w-[300px]" />
    </div>
  );
};

export default MessageBoxRight;