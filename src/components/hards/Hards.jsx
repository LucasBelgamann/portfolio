import { Data } from "./HardsData";
import './Hards.css';

const Hards = () => {
  return (
    <div className="container-hards">
        <div className="hards">
            {Data.map((e) => (
                <img src={e.img} alt="hard" />
            ))}
        </div>
    </div>
  );
};
export default Hards;