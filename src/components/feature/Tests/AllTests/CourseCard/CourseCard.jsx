import { Button, List } from "@components/common";
import { convertMinutesToDuration } from "@utils/functions";
import exampleImage from "@assets/images/n17r-logo-red.png";
import "./CourseCard.scss";
import { useTranslate } from "@helpers/hooks";

export default function CourseCard({ exam, setCurrentTabId }) {
  const { t } = useTranslate();

  const handleBuy = () => {
    setCurrentTabId(2);
  };

  return (
    <div className="card">
      <h4 className="card__title">{exam.title}</h4>
      <div className="card__subtitle">
        <h6>{t("TESTS.SUBJECTS")}</h6>
        <List
          className={"all-sections-list"}
          items={exam.sections}
          renderItem={(section) => <p key={section.id}>{section.title}</p>}
        />
      </div>
      <div className="card__author">
        <img className="card__author-avatar" src={exampleImage} />
        <div className="card__author-group">
          <p className="card__author-group-text">
            {convertMinutesToDuration(exam.total_duration)}
          </p>
          <p className="card__author-group-text">{`${exam.price.amount} Т`}</p>
        </div>
      </div>
      <div className="card__buttons">
        <Button
          className="card-button card__buttons-width"
          text={t("BUTTON.BUY")}
          onClick={handleBuy}
        />
      </div>
    </div>
  );
}
