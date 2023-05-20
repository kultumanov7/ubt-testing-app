import { Button, Icon } from "@components/common";
import "./ExamResultsHeader.scss";
import { useNavigate } from "react-router-dom";

const ExamResultsHeader = ({ setIsDetailsOpen, questions }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/my-tests/${questions.id}`);
  };

  const examIdAndTitle = `${questions.id}, ${questions.exam.title}`;

  const handleGoBack = () => {
    setIsDetailsOpen(false);
  };

  return (
    <div className="exam-page__header">
      <div className="exam-page__header-titles">
        <div className="exam-page__header-titles-route">
          <p className="base-route" onClick={handleGoBack}>
            Tests
          </p>
          <Icon name="breadcrumb-arrow" />
          <span>{examIdAndTitle}</span>
        </div>
        <h1>{examIdAndTitle}</h1>
      </div>
      <div className="exam-page__header-btn">
        <Button
          text="Работа над ошибками"
          className="btn--secondary"
          onClick={handleNavigate}
        />
      </div>
    </div>
  );
};

export default ExamResultsHeader;
