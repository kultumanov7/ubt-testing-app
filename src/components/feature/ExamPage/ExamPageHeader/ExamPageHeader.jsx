import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAction } from "@helpers/hooks";
import { Button, Icon } from "@components/common";
import { Timer } from "../Timer";
import "./ExamPageHeader.scss";

const ExamPageHeader = ({ questions, currentSection, currentQuestion }) => {
  const { completeEnrollment, saveResponses } = useAction();
  const navigate = useNavigate();

  const goBackToTests = () => {
    navigate("/");
  };

  const handleSaveAnswers = async (e) => {
    e.preventDefault();
    const payload = {
      id: questions.id,
      data: {
        question_id: currentSection.questions[currentQuestion].id,
        choice_ids: [currentSection.questions[currentQuestion].responses[0].choices[0]],
      },
    };
    await saveResponses(payload);
  };

  const finishExam = async () => {
    await completeEnrollment(questions.id);
    navigate("/");
  };

  return (
    <header className="exam-page-header">
      <div className="exam-page-header__left">
        <div
          className="exam-page-header__left__go-back"
          onClick={goBackToTests}
        >
          <Icon name="go-back" />
          <p>Назад</p>
        </div>
        <div className="exam-page-header__left__label">
          <span>{questions?.exam.title}, </span>#{questions?.id}
        </div>
      </div>
      <Timer
        started_at={questions.started_at}
        completed_at={questions.completed_at}
      />
      <div className="exam-page-header__actions">
        <Button
          text="Сохранить ответы"
          className="btn--secondary btn--pill btn--green"
          onClick={handleSaveAnswers}
        />
        <Button
          text="Завершить"
          className="btn--secondary btn--pill btn--opacity-low"
          onClick={finishExam}
        />
      </div>
    </header>
  );
};

export default ExamPageHeader;
