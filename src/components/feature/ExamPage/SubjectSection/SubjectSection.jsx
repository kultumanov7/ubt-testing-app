import classNames from "classnames";
import { SubjectQuestion } from "../SubjectQuestion";
import { List } from "@components/common";
import "./SubjectSection.scss";

const SubjectSection = (props) => {
  const { currentSection, currentQuestion, setCurrentQuestion } = props;
  return (
    <>
      {currentSection && (
        <div className="subject-section">
          <List
            className={"subject-section__boxes"}
            items={currentSection?.questions}
            renderItem={(q, i) => (
              <div
                key={i}
                className={classNames("subject-section__box", {
                  active: currentQuestion === i,
                })}
                onClick={() =>
                  setCurrentQuestion(currentSection?.questions.indexOf(q))
                }
              >
                {i + 1}
              </div>
            )}
          />
          <SubjectQuestion
            currentSection={currentSection}
            currentQuestion={currentQuestion}
          />
        </div>
      )}
    </>
  );
};

export default SubjectSection;
