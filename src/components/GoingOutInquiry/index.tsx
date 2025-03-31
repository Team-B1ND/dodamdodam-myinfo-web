import * as S from "./style";
import { DodamSegmentedButton, DodamErrorBoundary, Trash } from "@b1nd/dds-web";
import { useState } from "react";

const GoingOutInquiry = () => {
    const [isOutingSelected, setIsOutingSelected] = useState(true);
    
    const changePage = (text?: string) => {
        setIsOutingSelected(text === '외출');
    };

    const renderOutingList = () => (
        <S.OutingList>
            {isOutingSelected ? (
                <>
                    <S.OutingItem>
                        <S.OutingHeader>
                            <S.StatusLabel>대기중</S.StatusLabel>
                            <S.DeleteButton>
                                <Trash/>
                            </S.DeleteButton>
                        </S.OutingHeader>
                        <S.OutingContent>
                            바인드 선배님이 회식하라고 돈 보내주셔서 소고기 먹고 오겠습니다.
                            (희망사항)
                        </S.OutingContent>
                        <S.OutingTime>
                            <span>외출 2024.11.06 20:20:11</span>
                            <span>복귀 2024.11.06 20:20:11</span>
                        </S.OutingTime>
                    </S.OutingItem>

                    <S.OutingItem>
                        <S.OutingHeader>
                            <S.StatusLabel>대기중</S.StatusLabel>
                            <S.DeleteButton>
                                <Trash/>
                            </S.DeleteButton>
                        </S.OutingHeader>
                        <S.OutingContent>
                            바인드 선배님이 회식하라고 돈 보내주셔서 소고기 먹고 오겠습니다.
                            (희망사항)
                        </S.OutingContent>
                        <S.OutingTime>
                            <span>외출 2024.11.06 20:20:11</span>
                            <span>복귀 2024.11.06 20:20:11</span>
                        </S.OutingTime>
                    </S.OutingItem>

                    <S.OutingItem>
                        <S.OutingHeader>
                            <S.StatusLabel>대기중</S.StatusLabel>
                            <S.DeleteButton>
                                <Trash/>
                            </S.DeleteButton>
                        </S.OutingHeader>
                        <S.OutingContent>
                            바인드 선배님이 회식하라고 돈 보내주셔서 소고기 먹고 오겠습니다.
                            (희망사항)
                        </S.OutingContent>
                        <S.OutingTime>
                            <span>외출 2024.11.06 20:20:11</span>
                            <span>복귀 2024.11.06 20:20:11</span>
                        </S.OutingTime>
                    </S.OutingItem>
                </>
            ) : (
                <S.EmptyState>
                    외박 신청 내역이 없습니다.
                </S.EmptyState>
            )}
        </S.OutingList>
    );

    return(
        <S.GoingOutInquiryBox>
            <S.BoxTitle>
                외출 외박 조회
            </S.BoxTitle>
            
            <DodamErrorBoundary text="탭을 불러오는 중 오류가 발생했습니다.">
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
            </DodamErrorBoundary>
            
            <DodamErrorBoundary text="외출/외박 내역을 불러오는 중 오류가 발생했습니다.">
                {renderOutingList()}
            </DodamErrorBoundary>
        </S.GoingOutInquiryBox>
    );
};

export default GoingOutInquiry;