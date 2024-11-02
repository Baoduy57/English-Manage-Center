import Hero from "../components/Hero";
import Biography from "../components/Biography";
import ChatBox from "../components/ChatBox";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Tìm hiểu thêm về chúng tôi | EnglishManageCenter"}
        imageUrl={"/about1.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
      <ChatBox></ChatBox>
    </>
  );
};

export default AboutUs;
