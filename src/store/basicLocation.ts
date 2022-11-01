import { atom } from "recoil";
import { defaultStudyRooms } from "../types/basicLocation/basicLocation.type";

export const basicLocationFor = atom<string>({
  key: "basicLocationFor",
  default: "oneday",
});

export const basicLocatioinRoomAtom = atom<defaultStudyRooms[]>({
  key: "basicLocatioinRoomAtom",
  default: [
    { placeId: 0, timeTableId: 0 },
    { placeId: 0, timeTableId: 0 },
    { placeId: 0, timeTableId: 0 },
    { placeId: 0, timeTableId: 0 },
  ],
});
