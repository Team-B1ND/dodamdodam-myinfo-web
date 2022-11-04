import { useEffect, useState } from "react";
import classroomRepository from "../../repository/classroom/classroom.repository";
import { classroomList } from "../../types/classroom/classroom.type";

const useClassroom = () => {
  const [classroomList, setClassroomList] = useState<classroomList[]>([
    {
      id: 0,
      name: "string",
      type: {
        id: 0,
        name: "string",
      },
    },
  ]);

  const getClassroomList = async () => {
    try {
      const { data } = await classroomRepository.getClassroom();
      setClassroomList(data);
    } catch (error) {}
  };

  useEffect(() => {
    getClassroomList();
  }, []);

  return { classroomList };
};

export default useClassroom;
