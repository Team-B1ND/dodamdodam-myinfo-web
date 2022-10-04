export interface classroomList {
  id: number;
  name: string;
  type: {
    id: number;
    name: string;
  };
}

export interface classroomListResponse extends Response {
  data: classroomList[];
  message: string;
  status: number;
}
