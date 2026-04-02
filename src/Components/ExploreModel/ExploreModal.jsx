import { useEffect } from "react";
import "./ExploreModal.css";

const ExploreModal = ({ car, onClose }) => {

  // Close on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if(e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        
        <div className="modal-content">
          <div className="modal-image">
            <img src={car.image} alt={car.name} />
          </div>

          <div className="modal-info">
            <h1>{car.name}</h1>
            <p className="price">{car.price}</p>
            <div className="specs">
              <span>⭐ {car.rating}</span>
              <span>⚡ {car.speed}</span>
              <span>⛽ {car.mileage}</span>
              <span>🛡 {car.safety}</span>
            </div>
            <p className="desc">{car.desc}</p>
            <button className="book-btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreModal;