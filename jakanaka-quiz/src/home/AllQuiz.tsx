import { useGetAllQuizQuery } from "@/redux/api/quiz.api/quizApi";

const AllQuiz = () => {
  const { data } = useGetAllQuizQuery(undefined);
  console.log(data);
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center">All Quiz</h2>
    </div>
  );
};

export default AllQuiz;
