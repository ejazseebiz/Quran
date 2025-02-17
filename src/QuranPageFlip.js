import React from "react";
import HTMLFlipBook from "react-pageflip";

const QuranPageFlip = () => {
  // ✅ Define the page images in an array
  const pages = [
    "/quran/page-2.jpg",
    "/quran/page-3.jpg",
    "/quran/page-4.jpg",
    "/quran/page-5.jpg",
    "/quran/page-6.jpg",
    "/quran/page-7.jpg",
    "/quran/page-8.jpg",
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px", maxWidth:1140, margin:'auto', overflow:"hidden" }}>
      <HTMLFlipBook
        width={574}
        height={800}
        size="stretch"
        minWidth={315}
        minHeight={420}
        maxWidth={574}
        maxHeight={800}
        drawShadow={true}
        showCover={true}
        mobileScrollSupport={true}
        flippingTime={800}
        startPage={0}
        direction="rtl" // ✅ Enables Right-to-Left flipping
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }} // ✅ Center the flipbook

      >
        {pages.map((page, index) => (
          <div className="page" key={index}>
            <img src={page} alt={`Page ${index + 1}`} height={800} width={574} />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default QuranPageFlip;
