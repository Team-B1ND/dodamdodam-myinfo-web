import busApplyRepository from "../../repository/busApply/busApply.repository";

const useBusApply = (busId: string) => {
  const postBusApply = async () => {
    try {
      await busApplyRepository.postBusApply(busId);
    } catch (error) {
      console.log(error);
    }
  };
};

export default useBusApply;
