import { useEffect, useState } from "react";
import { BtnLoader, LayoutContainer, LayoutHeader } from "@components/common";
import { AllTests, ExamResults, MyTests } from "@components/feature";
import { useAction, useTranslate } from "@helpers/hooks";
import { useSelector } from "react-redux";
import "./Tests.scss";

const Tests = () => {
  const { t } = useTranslate();
  const tabs = [
      {
        id: 1,
        name: t("TESTS.ALL_TESTS"),
      },
      {
        id: 2,
        name: t("TESTS.MY_TESTS"),
      },
    ],
    { exams, isLoading } = useSelector((state) => state.exams),
    { fetchExams } = useAction(),
    [currentTabId, setCurrentTabId] = useState(1),
    [isDetailsOpen, setIsDetailsOpen] = useState(false);

  useEffect(() => {
    fetchExams();
  }, []);

  const getContent = (tab) => {
    switch (tab) {
      case 1:
        return <AllTests setCurrentTabId={setCurrentTabId} />;
      case 2:
        return <MyTests setIsDetailsOpen={setIsDetailsOpen} />;
      default:
        return <AllTests setCurrentTabId={setCurrentTabId} />;
    }
  };

  return (
    <>
      {isDetailsOpen ? (
        <LayoutContainer>
          <ExamResults setIsDetailsOpen={setIsDetailsOpen} />
        </LayoutContainer>
      ) : (
        <>
          {exams ? (
            <LayoutContainer>
              <LayoutHeader
                headerTitle={t("TESTS.TESTS")}
                tabs={tabs}
                currentTabId={currentTabId}
                setCurrentTabId={setCurrentTabId}
              />
              {getContent(currentTabId)}
            </LayoutContainer>
          ) : (
            <div className="parent-loader">
              <BtnLoader className={"btn-loader--blue-large"} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Tests;
