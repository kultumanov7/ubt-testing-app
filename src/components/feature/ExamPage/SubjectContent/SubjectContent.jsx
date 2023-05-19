import { useEffect, useState } from "react";
import { parseExamSections } from "@utils/functions";
import { LayoutContainer, TabsPane } from "@components/common";
import { SubjectSection } from "../SubjectSection";
import "./SubjectContent.scss";

const SubjectContent = ({
  questions,
  currentSection,
  currentQuestion,
  setCurrentQuestion,
  setCurrentSection,
}) => {
  const [currentTabId, setCurrentTabId] = useState(
    questions?.exam_questions[0].section.id
  );

  useEffect(() => {
    setCurrentQuestion(0);
  }, [currentTabId]);

  useEffect(() => {
    setCurrentSection(
      questions.exam_questions.find((q) => q.section.id === currentTabId)
    );
  }, [currentTabId, questions]);

  return (
    <div className="subject-content">
      <TabsPane
        tabs={parseExamSections(questions.exam.sections)}
        currentTabId={currentTabId}
        setCurrentTabId={setCurrentTabId}
      />
      <SubjectSection
        currentSection={currentSection}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>
  );
};

export default SubjectContent;
