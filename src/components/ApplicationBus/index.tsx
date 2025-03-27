import * as S from "./style";
import { SchoolBus, School } from "@b1nd/dds-web";

const ApplicationBus = () => {
    return(
        <S.ApplicationBusBox>
            <S.BusHeader>
                <SchoolBus
                    size={30}
                />
                <S.BoxTitle>
                    귀가 버스 신청
                </S.BoxTitle>
            </S.BusHeader>
            <S.BusContent>
                <School
                    size={70}
                />
                <S.NoticeBusText>
                    버스가 없습니다
                    학교에서 공부하세요
                </S.NoticeBusText>
            </S.BusContent>
        </S.ApplicationBusBox>
    )
}

export default ApplicationBus;