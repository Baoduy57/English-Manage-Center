import Hero from "../components/Hero";
import Biography from "../components/Biography";
import ChatBot from "../components/ChatBot";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Tìm hiểu thêm về chúng tôi | EnglishManageCenter"}
        imageUrl={"/about1.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
      <ChatBot />
    </>
  );
};

export default AboutUs;
