import "./App.css";
import GamePlay from "./screens/GamePlay";
const App = () => {
  const possiblePositions = [
    [43, 89],
    [43, 137],
    [43, 185],
    [43, 233],
    [30, 112],
    [30, 160],
    [30, 208],
    [71, 88],
    [71, 136],
    [71, 184],
    [71, 232],
  ];

  return (
    <>
      <GamePlay />
    </>
  );
};

export default App;
