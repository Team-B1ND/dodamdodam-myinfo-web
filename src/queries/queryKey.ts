import { PointType } from "types/MyPoint/myPoint.type";

export const QUERY_KEYS = {
  point: {
    getMy: (type: PointType) => ["point/getMyPoint", type],
  },
  pass: {
    getPass: "pass/getMyPasses",
  },
  leave: {
    getLeave: "leave/getMyLeave"
  },
  member:{
    getMy: "member/getMyMember",
  },
  bus: {
    getBus: "bus/getBus",
    getMyAppliedBus: "bus/getMyAppliedBus",
    getSeatInfo: "bus/getSeatInfo"
  }
};