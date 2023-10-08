import { useState } from "react";
import "./CommonPart.css"
import { RxCrossCircled } from "react-icons/rx";

const CommonPart = () => {
  const [isVisible, setVisible] = useState(true);

  const handleVisible = () => {
    setVisible(false);
  };
  return (
   <div>
    <div>
  {isVisible && (
    <div className="bg-amber-100 flex items-center">
      <p className="text-xl font-bold text-center py-1 flex-grow">
        Free Delivery & 100 Day Returns
      </p>
      <div className="flex items-center">
        <RxCrossCircled className="text-xl mr-5" onClick={handleVisible} />
      </div>
    </div>
  )}
</div>

<div className="bg-red-400 mt-0">
  <div className="marquee-container">
    <p className="text-xl font-bold">"Exquisite jewelry for every occasion"</p>
    <p className="text-xl font-bold">"Discover timeless elegance in our collections"</p>
    <p className="text-xl font-bold">"Luxury and beauty, all in one place"</p>
    <p className="text-xl font-bold">"Shop now and shine bright like a diamond"</p>
  </div>
</div>






   </div>
  );
};

export default CommonPart;
