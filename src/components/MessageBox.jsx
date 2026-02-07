import msg1 from "../assets/msg1.png";

const MessageBox = () => {
  return (
    <div
      className="absolute top-0 left-[30px] fade-in"
      style={{ animationDelay: "0.3s" }}
    >
      <img src={msg1} alt="testimonial" className="w-[300px]" />
    </div>
  );
};

export default MessageBox;