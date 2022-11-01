export interface defaultStudyRooms {
  placeId: number;
  timeTableId: number;
}

export interface studyroomByOneday {
  day: string;
  defaultStudyRooms: defaultStudyRooms[];
}
