import { Close, DodamFilledButton, DodamModal } from "@b1nd/dds-web";
import * as S from './style';
import WhiteBus from '../../../assets/bus_w.svg';
import DarkBus from '../../../assets/bus_d.svg'
import { Select } from "components/Common/Select";
import { useState } from "react";
import { useThemes } from "hooks/Theme/usetheme";
import { ETheme } from "enum/Theme/theme.enum";
import { useApplyBusSeatMutation, useChangeBusSeatMutation, useGetBusSeatInfo } from "queries/Bus/bus.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "queries/queryKey";

interface SeatChooseModalProps {
  isSeatModalOpen: boolean;
  close: () => void;
  busId: number;
  applySeat: number;
}

const SeatChooseModal = ({ isSeatModalOpen, close, busId, applySeat }: SeatChooseModalProps) => {
  const [selectedSeat, setSelectedSeat] = useState<number>(applySeat);
  const { themeColor } = useThemes();
  const { data } = useGetBusSeatInfo(busId);
  const applyBusSeat = useApplyBusSeatMutation();
  const changeBusSeat = useChangeBusSeatMutation();
  const queryClient = useQueryClient();

  return (
    <DodamModal isOpen={isSeatModalOpen} $background>
      <S.SeatChooseModalContainer>
        <header>
          <button onClick={() => {
              close()
              setSelectedSeat(applySeat)
            }}>
            <Close size={24} color="labelNormal"/>
          </button>
        </header>
        <S.SeatChooseMain>
          <img src={themeColor === ETheme.LIGHT ? WhiteBus : DarkBus} alt="버스"/>
          <section>
            좌석 선택
            <p>이미 선택된 좌석은 미표시됩니다.</p>
            <Select
              items={Array.from({length:44}).map((_, idx) => idx+1).filter(item => !data?.data.includes(item))}
              value={selectedSeat}
              onSelectedItemChange={(item: number) => setSelectedSeat(item)}
            />
            <DodamFilledButton
              size="Medium"
              text={applySeat ? "변경하기" : "신청하기"}
              enabled={applySeat !== selectedSeat && selectedSeat !== 0}
              onClick={() => (applySeat ? changeBusSeat : applyBusSeat).mutate(selectedSeat as number, {
                onSuccess: () => {
                  B1ndToast.showSuccess(`${selectedSeat}번 좌석 신청 성공`)
                  queryClient.invalidateQueries(QUERY_KEYS.bus.getMyAppliedBus, { refetchInactive: true })
                  queryClient.invalidateQueries(QUERY_KEYS.bus.getSeatInfo, { refetchInactive: true })
                  close()
                }
              })}
            />
          </section>
        </S.SeatChooseMain>
      </S.SeatChooseModalContainer>
    </DodamModal>
  );
};

export default SeatChooseModal;
