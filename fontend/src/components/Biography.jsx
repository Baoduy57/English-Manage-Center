// import React from "react";

// eslint-disable-next-line react/prop-types
const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Tiểu sử</p>
          <h3>Chúng tôi là ai</h3>
          <p>
            EnglishManageCenter là một nền tảng quản lý trung tâm tiếng Anh toàn
            diện, được thiết kế để cung cấp các giải pháp quản lý hiệu quả và
            linh hoạt cho các trung tâm Anh ngữ. Với tính năng hiện đại và giao
            diện dễ sử dụng, hệ thống của chúng tôi giúp tối ưu hóa quy trình
            vận hành và quản lý thông tin, từ học viên đến giảng viên, lớp học
            và tài liệu giảng dạy. Đội ngũ chuyên gia của chúng tôi cam kết mang
            đến sự hỗ trợ tốt nhất, đảm bảo sự phát triển bền vững và thành công
            lâu dài của các trung tâm. Tại EnglishManageCenter, chúng tôi luôn
            đồng hành cùng bạn trên hành trình nâng cao chất lượng giảng dạy và
            học tập.
          </p>
          <p>Chúng ta đều đang ở năm 2024!</p>

          <p>
            Chúng tôi cung cấp các công cụ hỗ trợ học tập trực tuyến tích hợp,
            bao gồm video bài giảng, bài kiểm tra trực tuyến và diễn đàn thảo
            luận. Điều này không chỉ giúp học viên học tập linh hoạt mà còn tạo
            cơ hội tương tác tích cực giữa giảng viên và học viên.
          </p>
          <p>
            Hãy gia nhập EnglishManageCenter hôm nay và trải nghiệm sự khác biệt
            trong quản lý trung tâm tiếng Anh của bạn!
          </p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
