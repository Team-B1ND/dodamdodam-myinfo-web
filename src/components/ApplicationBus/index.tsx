import * as S from "./style";
import { SchoolBus, School, DodamFilledButton, DodamModal } from "@b1nd/dds-web";
import SeatChooseModal from "components/ApplicationBus/SeatChooseModal";
import { useGetMyAppliedBus } from "queries/Bus/bus.query";
import { useState } from "react";

const ApplicationBus = () => {
  const { data } = useGetMyAppliedBus();
  const [isSeatModalOpen, setIsSeatModalOpen] = useState(false);

  return (
    <S.ApplicationBusBox>
      <S.BusHeader>
        <SchoolBus size={30} />
        <S.BoxTitle>귀가 버스 정보</S.BoxTitle>
      </S.BusHeader>
      {data!.data ? (
        <S.BusItemContainer>
          <section>
            <span>내가 신청한 귀가버스</span>
            {data?.data.name}
            {data?.data.seat && ` ${data.data.seat}번 좌석`}
          </section>
          <div>
            <DodamFilledButton
              size="Large"
              width={144}
              text={data?.data.seat ? "좌석 변경" : "좌석 선택"}
              onClick={() => setIsSeatModalOpen(true)}
            />
            <DodamFilledButton
              size="Large"
              backgroundColorType="Negative"
              width={160}
              text="버스 미탑승 전환"
            />
          </div>
          <SeatChooseModal
            busId={data!.data.id}
            isSeatModalOpen={isSeatModalOpen}
            close={() => setIsSeatModalOpen(false)}
            applySeat={data!.data.seat}
          />
        </S.BusItemContainer>
      ) : (
      <S.BusContent>
        <School size={48} />
        <S.NoticeBusText>버스 정보 확인 기간이 아니거나, 신청자가 아닙니다.</S.NoticeBusText>
      </S.BusContent>)}
    </S.ApplicationBusBox>
  );
};

export default ApplicationBus;
