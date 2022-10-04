import { useEffect, useState } from "react";
import classroomRepository from "../../repository/classroom/classroom.repository";
import { classroomList } from "../../types/classroom/classroom.type";

const useClassroom = () => {
  const [classroomList, setClassroomList] = useState<classroomList[]>([]);

  const getClassroomList = async () => {
    try {
      const { data } = await classroomRepository.getClassroom();
      console.log("data");
      console.log(data);
      setClassroomList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(classroomList);
  }, [classroomList]);

  useEffect(() => {
    getClassroomList();
  }, []);

  return { classroomList };
};

export default useClassroom;