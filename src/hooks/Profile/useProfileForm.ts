import { ChangeEvent, useEffect, useState } from "react";
import { Profile } from "types/Profile/profile.type";

export interface FormDataState {
  name: string;
  phone: string;
  email: string;
  grade: string;
  room: string;
  number: string;
}

const useProfileForm = (user?: Profile | null) => {
  const [formData, setFormData] = useState<FormDataState>({
    name: user?.name ?? "",
    phone: user?.phone ?? "",
    email: user?.email ?? "",
    grade: user?.student?.grade?.toString() ?? "",
    room: user?.student?.room?.toString() ?? "",
    number: user?.student?.number?.toString() ?? "",
  });

  useEffect(() => {
    if (!user) return;
    setFormData({
      name: user.name ?? "",
      phone: user.phone ?? "",
      email: user.email ?? "",
      grade: user.student?.grade?.toString() ?? "",
      room: user.student?.room?.toString() ?? "",
      number: user.student?.number?.toString() ?? "",
    });
  }, [user]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }) as FormDataState);
  };

  const setForm = (next: FormDataState) => setFormData(next);

  const getParsedNumbers = () => {
    const gradeNum = formData.grade === "" ? null : parseInt(formData.grade);
    const roomNum = formData.room === "" ? null : parseInt(formData.room);
    const numberNum = formData.number === "" ? null : parseInt(formData.number);
    return { gradeNum, roomNum, numberNum };
  };

  return { formData, onChange, setForm, getParsedNumbers };
};

export default useProfileForm;
