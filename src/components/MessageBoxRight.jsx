import msg4 from "../assets/msg4.png";

const MessageBoxBottomRight = () => {
  return (
    <div
      className="absolute bottom-30 right-10 fade-in"
      style={{ animationDelay: "2.4s" }}
    >
      <img
        src={msg4}
        alt="testimonial bottom right"
        className="w-[360px]"
      />
    </div>
  );
};

export default MessageBoxBottomRight;