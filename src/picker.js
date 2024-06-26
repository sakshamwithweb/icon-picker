import React, { useEffect, useState } from "react";
import * as feather from "feather-icons";

const Picker = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight = 48,
  iconWidth = 48,
  pickerHeight = "500px",
  pickerWidth = "500px",
  setSelectedIcon,
  selectedIcon,
  setIsImageThere
}) => {
  const [imgList, setImgList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchIcons = async () => {
      try {
        const icons = feather.icons;
        const iconsArray = Object.keys(icons).map((iconKey) => ({
          name: iconKey,
          svg: icons[iconKey].toSvg(),
        }));
        setImgList(iconsArray);
        setTotalPages(Math.ceil(iconsArray.length / (rowsInOnePage * columnsInOnePage)));
      } catch (error) {
        console.error("Error fetching icons:", error);
      }
    };

    fetchIcons();
  }, [rowsInOnePage, columnsInOnePage]);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
    setIsImageThere(true);
  };

  const startIndex = currentPage * rowsInOnePage * columnsInOnePage;
  const endIndex = startIndex + rowsInOnePage * columnsInOnePage;
  const currentIcons = imgList.slice(startIndex, endIndex);

  return (
    <div className="overlay">
      <div className="icons-container" style={{ width: pickerWidth, height: pickerHeight }}>
        {currentIcons.map((icon) => (
          <div
            key={icon.name}
            className={`icon-wrapper ${selectedIcon === icon ? "selected" : ""}`}
            onClick={() => handleIconClick(icon)}
            style={{ width: iconWidth, height: iconHeight }}
          >
            <div dangerouslySetInnerHTML={{ __html: icon.svg }} />
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Picker;
