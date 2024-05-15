import * as S from "./style";
import busImage from "../../../../images/bus_3d.png";
import BusOption from "./BusOption/BusOption";
import ComponentTitle from "../../../common/ComponentTitle/ComponentTitle";
import useBusApply from "../../../../hooks/busApply/useBusApply";
import SCHOOL_IMG from "../../../../images/school_color.svg";
import dateTransform from "../../../../util/transform/dateTransform";

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
    deleteBusApply,
  } = useBusApply();

  return (
    <S.BusApplyWrap>
      <ComponentTitle>
        <S.BusImg src={busImage} />
        <S.BusApplyText>귀가 버스 신청</S.BusApplyText>
        <S.BusDateText>{dateTransform.hyphen(busDate)}</S.BusDateText>
        <S.BusApplyButton
          disabled={!isChange}
          isDisable={!isChange}
          onClick={selectedBusId === -1 ? onSubmitBusApply : onModifyBusApply}
        >
          수정
        </S.BusApplyButton>
        <S.BusApplyCancelButton
          disabled={isChange}
          isDisable={isChange}
          onClick={deleteBusApply}
        >
          신청취소
        </S.BusApplyCancelButton>
      </ComponentTitle>
      <S.BusApplyMainWrap>
        {serverBusData.length > 0 ? (
          serverBusData.map((bus) => (
            <BusOption
              onChangeApplyBus={onChangeApplyBus}
              isSelect={bus.id === selectBusId}
              data={bus}
              key={bus.id}
            />
          ))
        ) : (
          <S.BusIsNotFoundWrap>
            <S.BusNotFoundIcon src={SCHOOL_IMG} />
            <S.BusIsNotFoundTextWrap>
              <S.BusIsNotFound>버스가 없습니다</S.BusIsNotFound>
              <S.BusIsNotFound>
                <S.EmphasisSpan>학교에서</S.EmphasisSpan> 공부하세요
              </S.BusIsNotFound>
            </S.BusIsNotFoundTextWrap>
          </S.BusIsNotFoundWrap>
        )}
      </S.BusApplyMainWrap>
    </S.BusApplyWrap>
  );
};

export default BusApply;
