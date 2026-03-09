import { Avatar, DodamFilledButton, DodamTextField, Plus } from "@b1nd/dds-web";
import { ModalContent } from "../ChangePwModal/style";
import { ChangeProfileImg, ChangeProfileTitle, FlexBox } from "./style";
import useChangeProfile from "hooks/Profile/useChangeProfile";
import { DEFAULT_PREVIEW } from "hooks/Profile/useProfileImage";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import Modal from "components/Common/Modal";
import { Profile } from "types/Profile/profile.type";

interface ModalProps {
  isOpen: boolean;
  handleSet: () => void;
  user: Profile;
}

const ChangeProfile = ({ isOpen, handleSet, user }: ModalProps) => {
  const {
    formData,
    previewImage,
    onChange,
    onChangeImage,
    onSubmit,
    isBusy,
    onResetToDefault,
  } = useChangeProfile(user);

  const handleComplete = async () => {
    const res = await onSubmit();
    if (!res) return;
    if (res.success || res.reason === "noChanges") {
      B1ndToast.showSuccess("프로필 정보가 수정되었습니다.");
      handleSet();
      return;
    }
    B1ndToast.showError("프로필 정보 수정에 실패했습니다.");
  };
  // eslint-disable-next-line
  if (!user) return null;

  return (
    <Modal isOpen={isOpen} close={handleSet}>
      <ModalContent
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <ChangeProfileTitle>프로필 수정</ChangeProfileTitle>

        <ChangeProfileImg>
          {previewImage === DEFAULT_PREVIEW ? (
            <Avatar size="xxl" color="staticWhite" />
          ) : previewImage ? (
            <img src={previewImage} alt="" />
          ) : user.profileImage ? (
            <img src={user.profileImage} alt="" />
          ) : (
            <Avatar size="xxl" color="staticWhite" />
          )}
          <label htmlFor="profileImageInput">
            <Plus color="staticWhite" size={16} />
          </label>
          <input
            id="profileImageInput"
            type="file"
            style={{ display: "none" }}
            onChange={onChangeImage}
          />
          <span style={{ cursor: "pointer" }} onClick={onResetToDefault}>
            기본 프로필로 변경
          </span>
        </ChangeProfileImg>

        <DodamTextField
          id="name"
          name="name"
          type="text"
          value={formData.name}
          label="이름"
          onChange={onChange}
        />
        <DodamTextField
          id="phone"
          name="phone"
          type="text"
          value={formData.phone}
          label="전화번호"
          onChange={onChange}
        />
        <DodamTextField
          id="email"
          name="email"
          type="text"
          value={formData.email}
          label="이메일"
          onChange={onChange}
        />

        <FlexBox>
          <DodamTextField
            id="grade"
            name="grade"
            type="text"
            value={formData.grade}
            label="학년"
            onChange={onChange}
          />
          <DodamTextField
            id="room"
            name="room"
            type="text"
            value={formData.room}
            label="반"
            onChange={onChange}
          />
          <DodamTextField
            id="number"
            name="number"
            type="text"
            value={formData.number}
            label="번호"
            onChange={onChange}
          />
        </FlexBox>

        {isBusy ? (
          <DodamFilledButton
            size="Large"
            text="처리중..."
            textTheme="staticWhite"
            onClick={() => {}}
          />
        ) : (
          <DodamFilledButton
            size="Large"
            text="완료"
            textTheme="staticWhite"
            onClick={handleComplete}
          />
        )}
      </ModalContent>
    </Modal>
  );
};

export default ChangeProfile;
