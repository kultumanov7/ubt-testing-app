import { Button } from "@components/common";
import "./Profile.scss";
import { ProfileItems, UploadProfilePhoto } from "@components/feature";
import { useAction } from "@helpers/hooks";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { fetchRegions, fetchCities, fetchSchools, updateProfile } =
      useAction(),
    { profile } = useSelector((state) => state.profile),
    initialValues = useMemo(
      () => ({
        address: profile.address,
        city: profile.city.id,
        fathername: profile.fathername,
        id: profile.id,
        iin: profile.iin,
        mobile: profile.mobile,
        name: profile.name,
        region: profile.region.id,
        school: profile.school.id,
        school_year: profile.school_year,
        surname: profile.surname,
      }),
      [profile]
    ),
    [values, setValues] = useState(initialValues);

  useEffect(() => {
    fetchRegions();
  }, []);

  useEffect(() => {
    fetchCities();
  }, []);

  useEffect(() => {
    fetchSchools();
  }, []);

  const saveProfileData = async () => {
    await updateProfile({
      id: profile.id,
      data: values,
    });
  };

  return (
    <section className="profile">
      <div className="profile__header">
        <h1 className="profile__title">Профиль</h1>
        <Button
          text="Сохранить изменения"
          onClick={saveProfileData}
          className="btn--secondary btn--pill"
        />
      </div>
      <UploadProfilePhoto profile={profile} />
      <ProfileItems values={values} setValues={setValues} />
    </section>
  );
}
