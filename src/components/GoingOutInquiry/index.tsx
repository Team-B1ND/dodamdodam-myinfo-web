import * as S from "./style";
import { DodamSegmentedButton, DodamErrorBoundary, } from "@b1nd/dds-web";
import { Suspense, useState } from "react";
import OutGoingList from "./OutGoingList";
import MyPassListFallbackLoader from "components/Common/Skeleton/MyPassList";

const GoingOutInquiry = () => {
    const [isOutingSelected, setIsOutingSelected] = useState(true);
    
    const changePage = (text?: string) => {
        setIsOutingSelected(text === '외출');
    };

    return(
        <S.GoingOutInquiryBox>
            <S.BoxTitle>
                외출 외박 조회
            </S.BoxTitle>
                <S.ButtonContainer>
                <DodamSegmentedButton
                    num={2}
                    type="block"
                    data={[
                        { text: '외출', isAtv: isOutingSelected },
                        { text: '외박', isAtv: !isOutingSelected }
                    ]}
                    width={450}
                    height={45}
                    onClick={changePage}
                />
                </S.ButtonContainer>
                <div>
                    <S.Content>
                        <DodamErrorBoundary text="외출/외박 내역을 불러오는 중 오류가 발생했습니다.">
                            <Suspense fallback={<MyPassListFallbackLoader/>}>
                                <OutGoingList select={isOutingSelected}/>
                            </Suspense>
                        </DodamErrorBoundary>
                    </S.Content>
                </div>
        </S.GoingOutInquiryBox>
    );
};

export default GoingOutInquiry;