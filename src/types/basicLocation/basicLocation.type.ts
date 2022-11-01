export interface defaultStudyRooms {
  placeId: number;
  timeTableId: number;
}

export interface basicLocation {
  day: string;
  defaultStudyRooms: defaultStudyRooms[];
}
