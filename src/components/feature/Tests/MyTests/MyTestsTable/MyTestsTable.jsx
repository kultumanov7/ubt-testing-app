import { useNavigate } from "react-router-dom";
import { useAction, useTranslate } from "@helpers/hooks";
import { convertToLocaleString, formatDateString } from "@utils/functions";
import "./MyTestsTable.scss";
import { Icon } from "@components/common";

const MyTestsTable = ({ enrollments, setIsDetailsOpen }) => {
  const { t } = useTranslate();
  const { startEnrollment, getQuestions } = useAction();
  const navigate = useNavigate();

  const handleClickStatus = async (item) => {
    const startedTime = convertToLocaleString(item.started_at);
    const completedTime = convertToLocaleString(item.completed_at);
    const currentTime = convertToLocaleString(new Date());
    if (!startedTime) {
      await startEnrollment(item.id);
      navigate(`/my-tests/${item.id}`);
      return;
    }
    if (startedTime && startedTime <= currentTime) {
      if (completedTime >= currentTime) {
        navigate(`/my-tests/${item.id}`);
      }
      if (completedTime < currentTime) {
        // navigate(`/my-tests/${item.id}`);
        await getQuestions(item.id);
        setIsDetailsOpen(true);
      }
    }
  };

  const getStatus = (started_at, completed_at) => {
    const startedTime = convertToLocaleString(started_at);
    const completedTime = convertToLocaleString(completed_at);
    const currentTime = convertToLocaleString(new Date());
    if (!startedTime) {
      return (
        <>
          <p className="status status__blue">{t("TESTS.START")}</p>
          <Icon name="arrow-right" className="arrow__blue" />
        </>
      );
    }
    if (startedTime && startedTime <= currentTime) {
      if (completedTime >= currentTime) {
        return (
          <>
            <p className="status status__green">{t("TESTS.CONTINUE")}</p>
            <Icon name="arrow-right" className="arrow__green" />
          </>
        );
      }
      if (completedTime < currentTime) {
        return (
          <>
            <p className="status status__red">{t("BUTTON.SHOW_ANSWERS")}</p>
            <Icon name="arrow-right" className="arrow__red" />
          </>
        );
      }
    }
  };

  const getTimings = (started_at, completed_at) => {
    const startedTime = convertToLocaleString(started_at);
    if (!startedTime) {
      return "???";
    }
    if (startedTime) {
      return `${formatDateString(started_at)} - ${formatDateString(
        completed_at
      )}`;
    }
  };

  return (
    <table className="my-tests-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>{t("TESTS.TEST")}</th>
          <th>{t("TESTS.SUBJECTS")}</th>
          <th>{t("TESTS.LABELS.LABEL_1")}</th>
          <th>{t("TESTS.STATUS")}</th>
        </tr>
      </thead>
      <tbody>
        {enrollments?.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.exam.title}</td>
            <td>
              {item.exam.sections.map((section) => section.title).join(", ") ??
                "???"}
            </td>
            <td>
              <p className="my-tests-table__timing">
                {getTimings(item.started_at, item.completed_at)}
              </p>
            </td>
            <td
              className="my-tests-table__status"
              onClick={() => handleClickStatus(item)}
            >
              {getStatus(item.started_at, item.completed_at)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTestsTable;
