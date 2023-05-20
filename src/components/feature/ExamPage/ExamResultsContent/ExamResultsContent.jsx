import React from "react";
import "./ExamResultsContent.scss";

const ExamResultsContent = ({ questions }) => {
  const totalCount = questions.exam_questions.reduce((acc, item) => {
    return acc + item.questions.length;
  }, 0);

  const correctCount = questions.exam_questions.reduce((acc, item) => {
    return acc + item.total_correct_responses;
  }, 0);

  return (
    <table className="exam-results-content">
      <thead>
        <tr>
          <th>Предмет</th>
          <th>Набрано баллов</th>
        </tr>
      </thead>
      <tbody>
        {questions.exam_questions.map((item) => (
          <tr key={item.id}>
            <td>{item.section.title}</td>
            <td className="bold-score">
              {item.total_correct_responses} из {item.questions.length}
            </td>
          </tr>
        ))}
        <tr>
          <td>Всего:</td>
          <td className="bold-score">
            {correctCount} из {totalCount}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExamResultsContent;
