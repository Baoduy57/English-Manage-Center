import Hero from "../components/Hero";
import CourseForm from "../components/CourseForm";

const Course = () => {
  return (
    <>
      <Hero
        title={"Lên lịch khóa học của bạn | EnglishManageCenter"}
        imageUrl={"/signin.png"}
      />
      <CourseForm />
    </>
  );
};

export default Course;
