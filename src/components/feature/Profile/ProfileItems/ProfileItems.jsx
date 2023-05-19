import { useMemo } from "react";
import { useSelector } from "react-redux";
import { FormItem, List } from "@components/common";
import { parseCities, parseRegions, parseSchools } from "@utils/functions";
import "./ProfileItems.scss";

const ProfileItems = ({ values, setValues }) => {
  const { regions, cities, schools } = useSelector((state) => state.directory),
    PROFILE_ITEMS = useMemo(
      () => [
        {
          id: 1,
          label: "Фамилия",
          placeholder: "Введите фамилию",
          field: "input",
          name: "surname",
          type: "text",
          value: values.surname,
        },
        {
          id: 2,
          label: "Область",
          placeholder: "Выберите область",
          field: "dropdown",
          name: "region",
          value: values.region.id,
          defaultValue: {
            name: parseRegions(regions).find(
              (item) => item.id === values.region
            )?.name,
            value: parseRegions(regions).find(
              (item) => item.id === values.region
            )?.value,
          },
          options: regions ? parseRegions(regions) : [],
        },
        {
          id: 3,
          label: "Имя",
          placeholder: "Введите имя",
          field: "input",
          name: "name",
          type: "text",
          value: values.name,
        },
        {
          id: 4,
          label: "Город",
          placeholder: "Выберите город",
          field: "dropdown",
          name: "city",
          value: values.city.id,
          defaultValue: {
            name: parseCities(cities).find((item) => item.id === values.city)
              ?.name,
            value: parseCities(cities).find((item) => item.id === values.city)
              ?.value,
          },
          options: cities ? parseCities(cities) : [],
        },
        {
          id: 5,
          label: "Отчество",
          placeholder: "Введите отчество",
          field: "input",
          name: "fathername",
          type: "text",
          value: values.fathername,
        },
        {
          id: 6,
          label: "Школа",
          placeholder: "Выберите школу",
          field: "dropdown",
          name: "school",
          type: "text",
          value: values.school.id,
          defaultValue: {
            name: parseSchools(schools).find(
              (item) => item.id === values.school
            )?.name,
            value: parseSchools(schools).find(
              (item) => item.id === values.school
            )?.value,
          },
          options: schools ? parseSchools(schools) : [],
        },
        {
          id: 7,
          label: "Класс",
          placeholder: "Введите класс",
          field: "input",
          name: "school_year",
          type: "text",
          value: values.school_year,
        },
        {
          id: 8,
          label: "ИИН",
          placeholder: "Введите ИИН",
          field: "input",
          name: "iin",
          type: "text",
          value: values.iin,
        },
        {
          id: 9,
          label: "Номер телефона",
          placeholder: "Введите номер телефона",
          field: "input",
          name: "mobile",
          type: "text",
          value: values.mobile,
        },
      ],
      [values, regions, cities]
    );

  const handleChange = async (e, field, name) => {
    if (field === "input") {
      setValues({ ...values, [name]: e.target.value });
      return;
    }
    if (field === "dropdown") {
      setValues({ ...values, [name]: e.value });
      return;
    }
  };

  return (
    <List
      className={"profile__items"}
      items={PROFILE_ITEMS}
      renderItem={(item) => (
        <FormItem key={item.id} item={item} handleChange={handleChange} />
      )}
    />
  );
};

export default ProfileItems;
