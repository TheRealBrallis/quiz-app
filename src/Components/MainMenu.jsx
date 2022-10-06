import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";

const MainMenu = () => {
  const { setGameState } = useContext(QuizContext);

  return (
    <div className="Menu">
      <h2>Test your knowledge on these 5 questions!</h2>
      <button onClick={() => setGameState("quiz")}>Start Quiz</button>
    </div>
  );
};

export default MainMenu;
