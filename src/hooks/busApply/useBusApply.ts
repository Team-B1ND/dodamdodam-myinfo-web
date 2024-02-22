import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useEffect, useState } from "react";
import busApplyRepository from "../../repository/busApply/busApply.repository";
import { Bus } from "../../types/busApply/busApply.type";

const useBusApply = () => {
  const [serverBusData, setServerBusData] = useState<Bus[]>([]);
  const [selectedBusId, setSelectedBusId] = useState<number>(-1);
  const [selectBusId, setSelectBusId] = useState<number>(-1);
  const [busDate, setBusDate] = useState("");
  const [isChange, setIsChange] = useState(false);

  const mappingBusData = async () => {
    try {
      const { data } = await busApplyRepository.getTodayBuses();
      setServerBusData(data.bus);
      setBusDate(data.date);
    } catch (error) {}
  };

  useEffect(() => {
    if (selectedBusId !== selectBusId) {
      setIsChange(true);
    } else {
      setIsChange(false);
    }
  }, [selectedBusId, selectBusId]);

  const initializingMyBus = async () => {
    try {
      const { data } = await busApplyRepository.getMyAppliedBus();
      handlingMyBus(data);
    } catch (error) {}
  };

  const handlingMyBus = (data: Bus | null) => {
    if (data) {
      setSelectedBusId(data.id);
      setSelectBusId(data.id);
    } else {
      setSelectedBusId(-1);
      setSelectBusId(-1);
    }
  };

  useEffect(() => {
    mappingBusData();
    initializingMyBus();
  }, []);

  const onSubmitBusApply = async () => {
    try {
      await busApplyRepository.postBusApply({ idx: String(selectBusId) });
      B1ndToast.showSuccess("버스 신청 성공");
      setSelectedBusId(selectBusId);
    } catch (error) {
      B1ndToast.showError("버스 신청 실패");
    }
  };

  const onModifyBusApply = async () => {
    try {
      await busApplyRepository.patchBusApply({
        idx: String(selectBusId),
        originIdx: String(selectedBusId),
      });
      B1ndToast.showSuccess("버스 수정 성공");
      setSelectedBusId(selectBusId);
    } catch (error) {
      B1ndToast.showInfo("버스 수정 실패");
    }
  };

  const onChangeApplyBus = (busId: number) => setSelectBusId(busId);

  return {
    isChange,
    serverBusData,
    busDate,
    selectBusId,
    selectedBusId,
    onChangeApplyBus,
    onSubmitBusApply,
    onModifyBusApply,
  };
};

export default useBusApply;
