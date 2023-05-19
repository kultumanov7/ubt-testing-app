import { useRef } from "react";
import { useAction, useTranslate } from "@helpers/hooks";
import { Button } from "@components/common";
import "./UploadProfilePhoto.scss";

const UploadProfilePhoto = ({ profile }) => {
  const { t } = useTranslate(),
    { updateProfile } = useAction(),
    fileInputRef = useRef(null);

  const handleClickChangePhoto = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("profile_photo", file);
    await updateProfile({ id: profile.id, data: formData });
  };

  const handleDeletePhoto = async () => {
    await updateProfile({ id: profile.id, data: { profile_pic: null } });
  };

  return (
    <div className="profile_avatar">
      <div className="profile_avatar_edit">
        <label htmlFor="file-input">
          {profile.profile_photo ? (
            <img className="avatar" src={profile.profile_photo} alt="avatar" />
          ) : (
            <div className="profile_avatar_placeholder_wrapper">
              <p className="profile_avatar_placeholder_text">
                {profile.name && profile.name[0]}
                {profile.surname && profile.surname[0]}
              </p>
            </div>
          )}
        </label>
        <input
          ref={fileInputRef}
          id="file-input"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <div className="profile_avatar_buttons">
          <label htmlFor="file-input">
            <Button
              onClick={handleClickChangePhoto}
              className="btn--secondary btn--pill"
              text={
                profile.profile_photo
                  ? t("PROFILE.CHANGE_PHOTO")
                  : t("PROFILE.UPLOAD_PHOTO")
              }
            />
          </label>
          {profile.profile_photo && (
            <Button
              className="btn--secondary btn--pill"
              text={t("PROFILE.DELETE_PHOTO")}
              onClick={handleDeletePhoto}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadProfilePhoto;
