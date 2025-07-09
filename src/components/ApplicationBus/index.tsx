import { B1ndToast } from "@b1nd/b1nd-toastify";
import * as S from "./style";
import { SchoolBus, School, DodamFilledButton } from "@b1nd/dds-web";
import SeatChooseModal from "components/ApplicationBus/SeatChooseModal";
import { useGetMyAppliedBus, useToggleBusApplyStatusMutation } from "queries/Bus/bus.query";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "queries/queryKey";

const ApplicationBus = () => {
  const { data } = useGetMyAppliedBus();
  const queryClient = useQueryClient();
  const toggleBusApplyStatusMutation = useToggleBusApplyStatusMutation();
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
            {data?.data.boardingType === "BEFORE_BOARDING" && <DodamFilledButton
              size="Large"
              width={144}
              text={data?.data.seat ? "좌석 변경" : "좌석 선택"}
              onClick={() => setIsSeatModalOpen(true)}
            />}
            <DodamFilledButton
              size="Large"
              backgroundColorType={
                data?.data.boardingType === "BEFORE_BOARDING"
                ? "Negative"
                : "Primary"}
              width={160}
              text={
                data!.data.boardingType === "BEFORE_BOARDING"
                ? "미탑승으로 전환"
                : data!.data.boardingType === "UNBOARDED"
                ? "탑승으로 전환"
                : "탑승 완료!"}
              onClick={() => toggleBusApplyStatusMutation.mutate(data?.data.boardingType === "BEFORE_BOARDING" ? "UNBOARDED" : "BEFORE_BOARDING", {
                onSuccess: () => {
                  B1ndToast.showSuccess("상태 전환 완료")
                  queryClient.invalidateQueries(QUERY_KEYS.bus.getMyAppliedBus, { refetchInactive: true })
                },
                onError: () => B1ndToast.showError("상태 전환에 실패했습니다!")
              })}
            />
          </div>
          <SeatChooseModal
            busId={data!.data.id}
            isSeatModalOpen={isSeatModalOpen}
            close={() => setIsSeatModalOpen(false)}
            applySeat={data!.data.seat || 0}
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
