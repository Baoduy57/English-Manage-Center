// import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Majors from "../components/Major";
import ChatBox from "../components/ChatBox";
const Home = () => {
  return (
    <>
      <Hero
        title={
          "Chào mừng đến với EnglishManageCenter | Nền tảng quản lý trung tâm Anh ngữ toàn diện của bạn"
        }
        imageUrl={"/hero1.png"}
      />
      <Biography imageUrl={"/about1.png"} />
      <Majors />
      <MessageForm />
      <ChatBox />
    </>
  );
};

export default Home;
