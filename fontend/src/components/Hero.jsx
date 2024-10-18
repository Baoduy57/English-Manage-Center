// eslint-disable-next-line react/prop-types
const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Chào mừng đến với EnglishManageCenter, nền tảng quản lý trung tâm
            tiếng Anh tiên tiến, được thiết kế để đáp ứng những thách thức và
            nhu cầu của giáo dục ngôn ngữ trong thời đại số. Trong năm 2024,
            chúng tôi cung cấp một giải pháp toàn diện giúp các trung tâm Anh
            ngữ tối ưu hóa quy trình quản lý, nâng cao chất lượng giảng dạy và
            trải nghiệm học tập cho học viên.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
