import styled from "styled-components";
import { palette } from "../../../../styles/palette";

export const BusApplyWrap = styled.div`
  width: 780px;
  height: 200px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const BusApplyText = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${palette.black};
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const BusDateText = styled.span`
  height: 25px;
  text-align: left;
  display: flex;
  align-items: flex-end;
  color: ${palette.black};
  font-size: 1rem;
  margin-left: 548px;
`;

export const BusImg = styled.img`
  width: 23px;
  height: 23px;
  display: flex;
  /* margin-left: 15px; */
`;

export const BusApplyMainWrap = styled.div`
  width: 780px;
  height: 155px;
  display: flex;
  /* border-radius: 20px;
  border: 1px solid #e3e9ed;
  box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%); */
  flex-direction: row;
  gap: 30px;
  /* background-color: r; */
`;
