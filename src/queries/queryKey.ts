import { PointType } from "types/MyPoint/myPoint.type";

export const QUERY_KEYS = {
  point: {
    getMy: (type: PointType) => ["point/getMyPoint", type],
  },
};