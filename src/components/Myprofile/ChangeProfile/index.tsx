import {
  Avatar,
  DodamDialog,
  DodamFilledButton,
  DodamTextField,
  Plus,
} from "@b1nd/dds-web";
import { useState, ChangeEvent } from "react";
import { ModalContent } from "../ChangePwModal/style";
import { ChangeProfileImg, ChangeProfileTitle, FlexBox } from "./style";
import { usePatchStudentInfo, usePatchMainProfile } from "queries/Profile/profile.query";
import Modal from "components/Common/Modal";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { Profile } from "types/Profile/profile.type";
import FileUpload from "repositories/Profile/fileUpload";

interface ModalProps {
  isOpen: boolean;
  handleSet: () => void;
  user: Profile;
}

const ChangeProfile = ({ isOpen, handleSet, user }: ModalProps) => {
  if (!user) return null;


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const patchStudent = usePatchStudentInfo();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const patchProfile = usePatchMainProfile();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState({
    name: user.name ?? "",
    phone: user.phone ?? "",
    email: user.email ?? "",
    grade: user.student?.grade?.toString() ?? "",
    room: user.student?.room?.toString() ?? "",
    number: user.student?.number?.toString() ?? "",
  });
// eslint-disable-next-line react-hooks/rules-of-hooks
  const [previewImage, setPreviewImage] = useState(user.profileImage ?? null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [uploadImage, setUploadImage] = useState<File | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
    DodamDialog.alert("이미지 수정하고 완료 버튼을 눌러주세요")
  };

  const onModifyStudentInfo = async () => {
    const grade = parseInt(formData.grade);
    const room = parseInt(formData.room);
    const number = parseInt(formData.number);

    if (
      grade === user.student?.grade &&
      room === user.student?.room &&
      number === user.student?.number
    ) {
      B1ndToast.showInfo("학번 정보를 변경해주세요.");
      return;
    }

    patchStudent.mutate(
      { grade, room, number },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("학번 정보가 성공적으로 수정되었습니다.");
        },
        onError: () => {
          B1ndToast.showError("학번 수정에 실패했습니다.");
        },
      }
    );
  };

  const onSubmitProfileInfo = async () => {
    let profileImageUrl: string | null = user.profileImage ?? null;

    if (uploadImage) {
      const formDataToUpload = new FormData();
      formDataToUpload.append("file", uploadImage);

      const { data } = await FileUpload.postFileUpload(formDataToUpload);
      profileImageUrl = data;

      setPreviewImage(null);
    }

    patchProfile.mutate({
      email: formData.email,
      phone: formData.phone,
      profileImage: profileImageUrl,
    });

    handleSet();
  };



  return (
    <Modal isOpen={isOpen} close={handleSet}>
      <ModalContent onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <ChangeProfileTitle>프로필 수정</ChangeProfileTitle>

        <ChangeProfileImg>
          {user.profileImage ? (
            <img src={previewImage ? previewImage : user.profileImage} alt="" />
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
          <span>기본 프로필로 변경</span>
        </ChangeProfileImg>

        <DodamTextField id="name" name="name" type="text" value={formData.name} label="이름" onChange={onChange} />
        <DodamTextField id="phone" name="phone" type="text" value={formData.phone} label="전화번호" onChange={onChange} />
        <DodamTextField id="email" name="email" type="text" value={formData.email} label="이메일" onChange={onChange} />

        <FlexBox>
          <DodamTextField id="grade" name="grade" type="text" value={formData.grade} label="학년" onChange={onChange} />
          <DodamTextField id="room" name="room" type="text" value={formData.room} label="반" onChange={onChange} />
          <DodamTextField id="number" name="number" type="text" value={formData.number} label="번호" onChange={onChange} />
          <DodamFilledButton width={30} size="Small" text="학번수정" textTheme="staticWhite" onClick={onModifyStudentInfo} />
        </FlexBox>

        <DodamFilledButton size="Large" text="완료" textTheme="staticWhite" onClick={onSubmitProfileInfo}/>
      </ModalContent>
    </Modal>
  );
};

export default ChangeProfile;