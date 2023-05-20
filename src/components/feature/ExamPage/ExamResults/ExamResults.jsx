import { useSelector } from "react-redux";
import { ExamResultsContent } from "../ExamResultsContent";
import { ExamResultsHeader } from "../ExamResultsHeader";
import "./ExamResults.scss";

const ExamResults = ({ setIsDetailsOpen }) => {
  const { questions } = useSelector((state) => state.exams);
  return (
    <div>
      <ExamResultsHeader
        questions={questions}
        setIsDetailsOpen={setIsDetailsOpen}
      />
      <ExamResultsContent questions={questions} />
    </div>
  );
};

export default ExamResults;
