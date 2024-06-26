import React, { useEffect, useState } from "react";
import "./App.css";
import Picker from "./picker";

function App() {
  const [boxFilled, setBoxFilled] = useState(false);
  const [isImageThere, setIsImageThere] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [confirmChange, setConfirmChange] = useState(false);

  const handleButtonClick = () => {
    setBoxFilled(true);
    setConfirmChange(false); // Reset confirmation state when showing picker
  };

  const handleIconClick = () => {
    setConfirmChange(true);
  };

  const handleCancelChange = () => {
    setConfirmChange(false);
  };

  const handleChangeIcon = () => {
    setBoxFilled(false); // Reset boxFilled to show picker again
    setIsImageThere(false); // Clear selected image state
    setSelectedIcon(null); // Reset selectedIcon
    setConfirmChange(false); // Reset confirmation state
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Ensure selectedIcon is not null and it includes width or height attributes
    if (selectedIcon && (selectedIcon.svg.includes('width="24"') || selectedIcon.svg.includes('height="24"'))) {
      const modifiedSvg = selectedIcon.svg
        .replace(/width="24"/g, 'width="500"')
        .replace(/height="24"/g, 'height="500"');
      setSelectedIcon((prevIcon) => ({
        ...prevIcon,
        svg: modifiedSvg,
      }));
    }
  }, [selectedIcon]);

  if (screenWidth < 350) {
    return (
      <div className="warning">
        Sorry, this application is not supported on screens smaller than 350px.
      </div>
    );
  }

  return (
    <div className="main">
      {isImageThere ? (
        <div className="box" onClick={handleIconClick}>
          <div
            style={{ width: "100%", height: "100%" }}
            dangerouslySetInnerHTML={{ __html: selectedIcon.svg }}
          />
        </div>
      ) : (
        <div className="box" onClick={handleButtonClick}>
          {boxFilled ? (
            <Picker
              setSelectedIcon={setSelectedIcon}
              selectedIcon={selectedIcon}
              setIsImageThere={setIsImageThere}
              rowsInOnePage={5}
              columnsInOnePage={4}
              iconHeight={48}
              iconWidth={48}
              pickerHeight="500px"
              pickerWidth="500px"
            />
          ) : (
            <div className="empty-box">Click to show icons</div>
          )}
        </div>
      )}

      {/* Confirmation modal */}
      {confirmChange && (
        <div className="confirmation-modal">
          <p>Do you want to change the selected icon?</p>
          <button onClick={handleChangeIcon}>Yes</button>
          <button onClick={handleCancelChange}>No</button>
        </div>
      )}
    </div>
  );
}

export default App;
