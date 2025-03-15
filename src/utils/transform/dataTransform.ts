import {
  basicLocationDay,
  basicLocationType,
} from "../../types/basicLocation/basicLocation.type";

class DataTransform {
  public dayTransform(day: basicLocationDay): string {
    switch (day) {
      case "MONDAY":
        return "월요일";

      case "TUESDAY":
        return "화요일";

      case "WEDNESDAY":
        return "수요일";

      case "THURSDAY":
        return "목요일";

      case "FRIDAY":
        return "금요일";

      case "SATURDAY":
        return "토요일";

      case "SUNDAY":
        return "일요일";

      default:
        return "월요일";
    }
  }

  public dayTypeTransform(day: string): basicLocationType {
    switch (day) {
      case "평일":
        return "WEEKDAY";

      case "주말":
        return "WEEKEND";

      default:
        return "WEEKDAY";
    }
  }
}

export default new DataTransform();
