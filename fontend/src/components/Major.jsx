// import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Majors = () => {
  const majorsArray = [
    {
      name: "Tiếng Anh Giao Tiếp",
      imageUrl: "/courses/TiếngAnhGiaoTiếp.webp",
    },
    {
      name: "Tiếng Anh Học Thuật",
      imageUrl: "/courses/TiếngAnhHọcThuật.png",
    },
    {
      name: "Tiếng Anh Thương Mại",
      imageUrl: "/courses/TiengAnhthuongmaionline.png",
    },
    {
      name: "Luyện Thi IELTS/TOEFL",
      imageUrl: "/courses/LuyệnThiIELTSTOEFL.jpg",
    },
    {
      name: "Tiếng Anh Thiếu Nhi",
      imageUrl: "/courses/TiếngAnhThiếuNhi.webp",
    },
    {
      name: "Tiếng Anh Thanh Thiếu Niên",
      imageUrl: "/courses/TiếngAnhThanhThiếuNiên.jpg",
    },
    {
      name: "Khóa Học Tiếng Anh Online",
      imageUrl: "/courses/KhóaHọcTiếng AnhOnline.png",
    },
    {
      name: "Tiếng Anh Du Lịch",
      imageUrl: "/courses/TiếngAnhDuLịch.jpg",
    },
    {
      name: "Tiếng Anh Phát Âm",
      imageUrl: "/courses/TiếngAnhPhátÂm.jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container majors">
        <h2>Chuyên ngành</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "medium",
            "small",
          ]}
        >
          {majorsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt={depart.name} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Majors;
