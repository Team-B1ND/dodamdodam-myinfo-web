export interface Place {
  id: number;
  name: string;
  type: {
    id: number;
    name: string;
  };
}

export interface placeListResponse extends Response {
  data: Place[];
  message: string;
  status: number;
}
