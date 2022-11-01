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
    } catch (error) {
      console.log("버스 못 불러옴");
    }
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
    } catch (error) {
      console.log("내가 신청한 버스 못 불러옴");
    }
  };

  const handlingMyBus = (data: Bus[]) => {
    if (data.length === 0) {
      setSelectedBusId(-1);
      setSelectBusId(-1);
    } else {
      const recentAppliedBus = data[data.length - 1];
      setSelectedBusId(recentAppliedBus.id);
      setSelectBusId(recentAppliedBus.id);
    }
  };

  useEffect(() => {
    mappingBusData();
    initializingMyBus();
  }, []);

  const onSubmitBusApply = async () => {
    try {
      await busApplyRepository.postBusApply({ idx: String(selectBusId) });
      window.alert("버스 신청 성공");
      setSelectedBusId(selectBusId);
    } catch (error) {
      window.alert("버스 신청 실패");
    }
  };

  const onModifyBusApply = async () => {
    try {
      await busApplyRepository.postBusApply({
        idx: String(selectBusId),
        originIdx: String(selectedBusId),
      });
      window.alert("버스 수정 성공");
      setSelectedBusId(selectBusId);
    } catch (error) {
      window.alert("버스 수정 실패");
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
