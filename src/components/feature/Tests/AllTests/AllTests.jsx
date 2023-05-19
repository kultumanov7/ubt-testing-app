import { useSelector } from "react-redux";
import "./AllTests.scss";
import { AllTestsTable } from "./AllTestsTable";
import { CourseCard } from "./CourseCard";
import { List } from "@components/common";

const AllTests = ({ setCurrentTabId }) => {
  const { exams, isLoading } = useSelector((state) => state.exams);

  return (
    <div className="all-tests">
      <List
        className={"all-tests-list"}
        items={exams}
        renderItem={(item) => (
          <CourseCard
            key={item.id}
            exam={item}
            setCurrentTabId={setCurrentTabId}
          />
        )}
      />
    </div>
  );
};

export default AllTests;
