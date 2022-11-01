import * as S from "./style";
import busImage from "../../../../images/bus_3d.png";
import BusOption from "./BusOption/BusOption";
import ComponentTitle from "../../../common/ComponentTitle/ComponentTitle";
import useBusApply from "../../../../hooks/busApply/useBusApply";

const BusApply = () => {
  const {
    isChange,
    serverBusData,
    busDate,
    onSubmitBusApply,
    selectBusId,
    selectedBusId,
    onChangeApplyBus,
    onModifyBusApply,
  } = useBusApply();

  return (
    <S.BusApplyWrap>
      <ComponentTitle>
        <S.BusImg src={busImage} />
        <S.BusApplyText>귀가 버스 신청</S.BusApplyText>
        <S.BusDateText>{busDate}</S.BusDateText>
        <S.BusApplyButton
          disabled={!isChange}
          isDisable={!isChange}
          onClick={selectedBusId === -1 ? onSubmitBusApply : onModifyBusApply}
        >
          수정
        </S.BusApplyButton>
      </ComponentTitle>
      <S.BusApplyMainWrap>
        {serverBusData.map((bus) => (
          <BusOption
            onChangeApplyBus={onChangeApplyBus}
            isSelect={bus.id === selectBusId}
            data={bus}
            key={bus.id}
          />
        ))}
      </S.BusApplyMainWrap>
    </S.BusApplyWrap>
  );
};

export default BusApply;
