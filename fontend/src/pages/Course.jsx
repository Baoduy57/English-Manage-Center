import Hero from "../components/Hero";
import CourseForm from "../components/CourseForm";
import ChatBot from "../components/ChatBot";

const Course = () => {
  return (
    <>
      <Hero
        title={"Lên lịch khóa học của bạn | EnglishManageCenter"}
        imageUrl={"/signin.png"}
      />
      <CourseForm />
      <ChatBot />
    </>
  );
};

export default Course;
