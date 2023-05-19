import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useAction } from "@helpers/hooks";
import { FormItem, LayoutContainer, List } from "@components/common";
import "./SubjectQuestion.scss";

const SubjectQuestion = ({ currentSection, currentQuestion }) => {
  const { questions, isLoading } = useSelector((state) => state.exams);
  const { saveResponses } = useAction();
  const [responseChoices, setResponseChoices] = useState(null);

  useEffect(() => {
    const choices =
      currentSection?.questions[currentQuestion]?.responses[0]?.choices[0];
    setResponseChoices(choices);
  }, [currentSection, currentQuestion]);

  const formAnswers = useMemo(() => {
    return currentSection?.questions[currentQuestion]?.choices.map((c) => ({
      ...c,
      id: c.id,
      label: c.text,
      name: c.text,
      value: c.id,
    }));
  }, [currentSection, currentQuestion]);

  const ANSWERS = useMemo(
    () => [
      {
        id: 1,
        label:
          `${currentQuestion + 1}. ` +
          currentSection?.questions[currentQuestion]?.text,
        placeholder: "Выберите правильный ответ",
        field: "radio",
        name: "answers",
        value: responseChoices,
        options: formAnswers,
      },
    ],
    [responseChoices, currentSection, currentQuestion, formAnswers]
  );

  const handleChange = useCallback(
    async (e, field) => {
      if (field === "radio") {
        const selectedChoice = formAnswers.find(
          (choice) => choice.id === +e.target.value
        );
        setResponseChoices(selectedChoice.value);
        const payload = {
          id: questions.id,
          data: {
            question_id: currentSection.questions[currentQuestion].id,
            choice_ids: [+e.target.value],
          },
        };
        await saveResponses(payload);
        return;
      }
    },
    [questions, currentSection, currentQuestion, formAnswers, saveResponses]
  );

  return (
    <div className="subject-question">
      <LayoutContainer>
        <List
          className="subject-question__answers"
          items={ANSWERS}
          renderItem={(c) => (
            <FormItem key={c.id} item={c} handleChange={handleChange} />
          )}
        />
      </LayoutContainer>
    </div>
  );
};

export default SubjectQuestion;
