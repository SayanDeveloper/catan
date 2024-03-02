import { Space } from "react-zoomable-ui";
import background from "../../assets/images/board.png";
import wheatCell from "../../assets/images/cells/wheat.png";
import oreCell from "../../assets/images/cells/ore.png";
import brickCell from "../../assets/images/cells/brick.png";
import lumberCell from "../../assets/images/cells/lumber.png";
import sheepCell from "../../assets/images/cells/sheep.png";
import Cell from "../../components/Cell";

const GamePlay = () => {
  return (
    <div>
      <Space
        onUpdated={(view) => {
          if (view.centerX > 200) return;
          console.log("react-zoomable-ui", view);
        }}
        className="border border-green-700"
      >
        <div className="relative top-[200px] left-[10%] w-[320px] h-[320px] transform scale-150">
          <img src={background} className="object-contain w-[320px] relative" />
          <div className="absolute top-[71px] left-[232px] w-[4px] h-[4px] bg-red-500 rounded-full z-[2] transform -translate-x-[50%] -translate-y-[50%] opacity-50"></div>
          {/* first row */}
          <Cell src={oreCell} top={29} left={88} />
          <Cell src={brickCell} top={29} left={136} />
          <Cell src={lumberCell} top={29} left={184} />
          {/* second row */}
          <Cell src={wheatCell} top={71} left={64} />
          <Cell src={sheepCell} top={71} left={112} />
          <Cell src={wheatCell} top={71} left={160} />
          <Cell src={wheatCell} top={71} left={208} />
          {/* third row */}
          <Cell src={wheatCell} top={112} left={40} />
          <Cell src={wheatCell} top={112} left={88} />
          <Cell src={wheatCell} top={112} left={136} />
          <Cell src={wheatCell} top={112} left={184} />
          <Cell src={wheatCell} top={112} left={232} />
          {/* fourth row */}
          <Cell src={wheatCell} top={154} left={64} />
          <Cell src={wheatCell} top={154} left={112} />
          <Cell src={wheatCell} top={154} left={160} />
          <Cell src={wheatCell} top={154} left={208} />
          {/* fifth row */}
          <Cell src={wheatCell} top={196} left={88} />
          <Cell src={wheatCell} top={196} left={136} />
          <Cell src={wheatCell} top={196} left={184} />
        </div>
      </Space>
      <div className="fixed top-0 left-0 w-screen h-[80px] bg-[#3383d7]"></div>
      <div className="fixed bottom-0 left-0 w-screen h-[80px] bg-[#3383d7]"></div>
    </div>
  );
};

export default GamePlay;
