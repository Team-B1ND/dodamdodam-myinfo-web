import { atom } from "recoil";
import {
  applyDefaultRoom,
  basicLocationDay,
} from "../types/basicLocation/basicLocation.type";

export const basicLocatioinRoomAtom = atom<applyDefaultRoom[]>({
  key: "basicLocatioinRoomAtom",
  default: [
    { placeId: 0, timeTableId: 0 },
    { placeId: 0, timeTableId: 0 },
    { placeId: 0, timeTableId: 0 },
    { placeId: 0, timeTableId: 0 },
  ],
});

export const basicLocationRoomDayAtom = atom<basicLocationDay>({
  key: "basicLocationRoomTypeAtom",
  default: "MONDAY",
});
