import Audi from "../../assets/audi.png";
import BMW from "../../assets/BMW.png";
import Ford from "../../assets/ford.png";
import Honda from "../../assets/honda.png";
import Jaguar from "../../assets/jaguar.png";
import Kia from "../../assets/kia.png";
import Mahindra from "../../assets/mahindra.png";
import RollsRoyce from "../../assets/rollsroyce.png";
import Suzuki from "../../assets/suzuki.png";
import TATA from "../../assets/tata.png";

import "./Home.css";

const Home = ({ setSelectedCar }) => {
  const cars = [
    { id:1, name:"Audi", image:Audi, price:"₹60L", rating:"4.8", speed:"250km/h", mileage:"15km/l", safety:"5 Star", desc:"Premium design, smooth performance" },
    { id:2, name:"BMW", image:BMW, price:"₹55L", rating:"4.7", speed:"240km/h", mileage:"14km/l", safety:"5 Star", desc:"Sporty performance, luxury handling" },
    { id:3, name:"Ford", image:Ford, price:"₹30L", rating:"4.5", speed:"220km/h", mileage:"13km/l", safety:"4 Star", desc:"Durable build quality" },
    { id:4, name:"Honda", image:Honda, price:"₹20L", rating:"4.6", speed:"200km/h", mileage:"18km/l", safety:"5 Star", desc:"Fuel efficient and reliable" },
    { id:5, name:"Jaguar", image:Jaguar, price:"₹80L", rating:"4.9", speed:"260km/h", mileage:"12km/l", safety:"5 Star", desc:"Luxury and speed" },
    { id:6, name:"Kia", image:Kia, price:"₹25L", rating:"4.4", speed:"190km/h", mileage:"17km/l", safety:"4 Star", desc:"Stylish design and smart features" },
    { id:7, name:"Mahindra", image:Mahindra, price:"₹22L", rating:"4.5", speed:"180km/h", mileage:"16km/l", safety:"5 Star", desc:"Strong SUVs, off-road capable" },
    { id:8, name:"Rolls Royce", image:RollsRoyce, price:"₹6Cr", rating:"5.0", speed:"250km/h", mileage:"10km/l", safety:"5 Star", desc:"Ultimate luxury car" },
    { id:9, name:"Suzuki", image:Suzuki, price:"₹10L", rating:"4.3", speed:"170km/h", mileage:"20km/l", safety:"4 Star", desc:"Affordable, easy maintenance" },
    { id:10, name:"TATA", image:TATA, price:"₹15L", rating:"4.6", speed:"180km/h", mileage:"19km/l", safety:"5 Star", desc:"Safe and reliable" },
  ];

  return (
    <div className="home">
      <h1>Explore Our Collection</h1>
      <p>Select a car to see details</p>

      <div className="car-grid">
        {cars.map(car => (
          <div key={car.id} className="car-card" onClick={()=>setSelectedCar(car)}>
            <img src={car.image} alt={car.name}/>
            <h3>{car.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;