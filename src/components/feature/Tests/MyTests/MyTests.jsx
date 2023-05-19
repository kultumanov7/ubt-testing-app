import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { parseExams } from "@utils/functions";
import { STATUSES } from "@utils/consts";
import { FormItem, List } from "@components/common";
import { useAction } from "@helpers/hooks";
import { MyTestsTable } from "./MyTestsTable";
import "./MyTests.scss";

const MyTests = () => {
  const { exams, enrollments, isLoading } = useSelector((state) => state.exams),
    { fetchEnrollments } = useAction(),
    [testType, setTestType] = useState(null),
    [statusType, setStatusType] = useState(null),
    TEST_FILTER_ITEMS = useMemo(
      () => [
        {
          id: 1,
          label: "Тест",
          placeholder: "Выберите тест",
          field: "dropdown",
          name: "test",
          value: testType,
          options: exams ? parseExams(exams) : [],
        },
        // {
        //   id: 2,
        //   label: "Статус",
        //   placeholder: "Выберите статус",
        //   field: "dropdown",
        //   name: "status",
        //   value: statusType,
        //   options: STATUSES,
        // },
      ],
      [testType, statusType, exams]
    );

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const handleChange = async (e, field, name) => {
    if (field === "dropdown") {
      if (name === "test") setTestType(e.value);
      // if (name === "status") setStatusType(e.value);
      return;
    }
  };

  return (
    <div>
      <List
        className={"tests__filter"}
        items={TEST_FILTER_ITEMS}
        renderItem={(item) => (
          <FormItem key={item.id} item={item} handleChange={handleChange} />
        )}
      />
      <MyTestsTable enrollments={enrollments} />
    </div>
  );
};

export default MyTests;
