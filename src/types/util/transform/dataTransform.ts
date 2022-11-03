import {
  basicLocationDay,
  basicLocationType,
} from "../../basicLocation/basicLocation.type";

class DataTransform {
  public dayTransform(day: string): basicLocationDay {
    switch (day) {
      case "월":
        return "MONDAY";

      case "화":
        return "TUESDAY";

      case "수":
        return "WEDNESDAY";

      case "목":
        return "THURSDAY";

      case "금":
        return "FRIDAY";

      case "토":
        return "SATURDAY";

      case "일":
        return "SUNDAY";

      default:
        return "MONDAY";
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
