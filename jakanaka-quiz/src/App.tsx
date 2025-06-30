import "./App.css";
import Question from "./home/Question";
import QuizModel from "./home/QuizModel";
import { QuizSummary } from "./home/QuizSummary";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz);

  return (
    <>
      <h1 className="text-center text-9xl my-12">Quiz App</h1>
      <div className="text-center">
        <QuizModel></QuizModel>
      </div>
      {!quizComplete ? <Question /> : <QuizSummary />}
    </>
  );
}

export default App;
