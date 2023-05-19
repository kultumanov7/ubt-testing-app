import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAction } from "@helpers/hooks";
import { ExamPageHeader, SubjectContent } from "@components/feature";
import "./ExamPage.scss";

const ExamPage = () => {
  const { id } = useParams();
  const { questions, isLoading } = useSelector((state) => state.exams),
    { getQuestions } = useAction(),
    [currentSection, setCurrentSection] = useState(""),
    [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    getQuestions(id);
  }, []);

  return (
    <>
      {questions ? (
        <div className="exam-page">
          <ExamPageHeader
            questions={questions}
            currentSection={currentSection}
            currentQuestion={currentQuestion}
          />
          <SubjectContent
            questions={questions}
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
          />
        </div>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default ExamPage;
