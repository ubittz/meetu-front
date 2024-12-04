export const TERMS_TYPE = {
  PRIVACY: 'privacy',
  TRANSACTION: 'transaction',
} as const;

export const TERMS_TYPE_TITLE = {
  [TERMS_TYPE.PRIVACY]: '개인정보 수집 및 이용동의',
  [TERMS_TYPE.TRANSACTION]: '전자금융거래 약관',
} as const;

export const TERMS_TYPE_CONTENT = {
  [TERMS_TYPE.PRIVACY]: (
    <div>
      <p className='terms__list_second'>
        (주)루나스타 (이하 ‘회사’라 함)은 이용자의 개인정보를 ‘개인정보보호법’ 등 관계 법령에 의거하여 안전하게 관리 및 보호하고 있습니다.
      </p>
      <p className='terms__list_second'>
        회사의 스토어 서비스(이하 ‘서비스’라 함)에서는 개인정보의 수집 및 이용 등 처리에 있어서 아래의 사항을 정보주체에게 안내하고 동의를 받습니다.
        정보주체에게는 개인정보의 수집 및 이용을 거부할 권리가 있으나, 아래 개인정보 수집 관련 사항은 서비스 제공을 위한 최소한의 개인정보 수집으로서
        본 동의를 거부하실 경우, 서비스 이용이 불가능합니다
      </p>
      <p className='terms__list_first'>1. 수집하는 개인정보 항목</p>
      <p className='terms__list_second'>
        밋유 스토어 회원 가입 방식에 따라 이용자로부터 아래와 같은 개인정보를 수집 및 이용하며, 서비스 제공을 위해 필요한 필수 개인정보만 수집하고
        있습니다.
      </p>
      <ul className='terms__list_third'>
        <li>밋유 아이디로 가입하기: 밋유 아이디, 밋유 회원정보의 이름, 이메일주소, 휴대전화번호</li>
        <li>이메일 주소로 가입하기: 이메일주소(아이디), 비밀번호, 이름, 휴대전화번호</li>
      </ul>
      <p className='terms__list_second'>
        계정 생성 후, 밋유 스토어 판매회원 가입 시점에서 이용자가 선택하는 판매회원 종류에 따라 아래와 같은 개인정보를 수집합니다.
      </p>

      <p className='terms__list_second'>&lt;개인 판매회원&gt;</p>
      <ul className='terms__list_third'>
        <li>
          필수항목: 이름, DI(중복가입확인정보), CI(암호화된 동일인 식별정보), 성별, 국적, 생년월일, 이메일주소, 휴대전화번호, 주소, 대표전화번호,
          정산대금 입금 계좌정보(은행명, 예금주명, 계좌번호), 배송정보(출고지 및 반품/교환지의 주소 및 연락처), 미성년자의 경우 법정대리인 정보 및
          관련 증빙서류(법정대리인 동의서 사본(회원의 이름, 로그인ID, 생년월일, 주소, 연락처, 이메일/법정대리인의 이름, 생년월일, 주소, 연락처,
          이메일), 가족관계증명서(또는 법정대리인 증명서류) 사본, 법정대리인 인감증명서 사본, 특정상품 판매 시 관련업 신고증)
        </li>
      </ul>
      <p className='terms__list_second'>&lt;사업자 판매회원&gt;</p>
      <ul className='terms__list_third'>
        <li>
          필수항목: 대표자 정보(이름, 성별, 국적, 생년월일, CI), 사업장 주소, 대표전화번호, 담당자 정보(이메일 주소 또는 휴대전화번호),
          배송정보(출고지 및 반품/교환지의 주소 및 연락처), 정산대금 입금 계좌정보(은행명, 예금주명, 계좌번호), 증빙서류(사업자등록증, 통신판매업
          신고증, 인감증명서, 통장 사본), 특정상품판매 시 관련업 신고증)
        </li>
      </ul>
      <p className='terms__list_second'>&lt;해외 사업자 판매회원&gt;</p>
      <ul className='terms__list_third'>
        <li>
          필수항목: 대표자 정보(이름, 성별, 국적, 생년월일), 해외 사업장 주소, 대표전화번호, 담당자 정보(이메일 주소 또는 휴대전화번호),
          배송정보(출고지 및 반품/교환지의 주소 및 연락처), 정산대금 입금계좌정보(은행명, 예금주명, 계좌번호), 증빙서류(해외 사업자 등록증, 신분증
          사본, 통장(또는 해외계좌 인증 서류) 사본, 특정상품 판매 시 관련업 신고증)
        </li>
        <li>선택항목: 국내 사업장 주소</li>
      </ul>
      <p className='terms__list_second'>
        밋유 스토어는 특정 금융거래정보의 보고 및 이용 등에 관한 법률 5조 2항에 따른 자금세탁 방지 의무를 준수하기 위해 각 사업장의 신원확인 대상자에
        대해 아래와 같은 개인정보를 수집합니다.
      </p>
      <p className='terms__list_second'>&lt;고객 확인제도 등록정보&gt;</p>
      <ul className='terms__list_third'>
        <li>내국인 : 이름, 생년월일, 성별, CI, 계좌번호, 주소, (휴대)전화번호</li>
        <li>외국인 : 이름, 생년월일, 성별, 여권번호, 국적, 주소, (휴대)전화번호</li>
        <li>법인 사업자 : 대표자 및 실소유자의 이름, 생년월일, 성별, 주소, 국적, (휴대)전화번호</li>
      </ul>
      <p className='terms__list_second'>&lt;강화된 고객확인제도 등록정보&gt;</p>
      <ul className='terms__list_third'>
        <li>주민등록번호</li>
      </ul>
      <p className='terms__list_second'>
        또한 서비스 이용 과정에서 서비스 이용기록, 접속로그, 쿠키, IP주소, 기기정보 등이 생성되어 저장될 수 있습니다.
      </p>
      <p className='terms__list_first'>2. 개인정보의 수집 및 이용목적</p>
      <p className='terms__list_second'>가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산</p>
      <ul className='terms__list_third'>
        <li>컨텐츠 제공, 특정 맞춤 서비스 제공, 물품배송 또는 청구서 등 발송, 본인인증, 구매 및 요금 결제, 요금추심</li>
      </ul>
      <p className='terms__list_second'>나. 회원관리</p>
      <ul className='terms__list_third'>
        <li>
          회원제 서비스 제공, 개인식별, 밋유 이용약관 위반 회원에 대한 이용제한 조치, 서비스의 원활한 운영에 지장을 미치는 행위 및 서비스 부정이용
          행위 제재, 가입의사 확인, 밋유 전자상거래/광고 등 비즈니스 플랫폼 서비스의 가입 및 가입횟수 제한, 만14세 미만 아동 개인정보 수집 시 법정
          대리인 동의여부 확인, 추후 법정 대리인 본인확인, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항 전달, 회원탈퇴 의사의 확인
        </li>
      </ul>
      <p className='terms__list_second'>다. 신규 서비스 개발 및 마케팅·광고에의 활용</p>
      <ul className='terms__list_third'>
        <li>
          신규 서비스 개발 및 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 이벤트 정보 및 참여기회 제공,
          광고성 정보 제공, 접속빈도 파악, 회원의 서비스이용에 대한 통계
        </li>
      </ul>
      <p className='terms__list_first'>3. 개인정보의 보유 및 이용기간</p>
      <h3 className='terms__list_second'>
        원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간
        동안 보존합니다. 관련 법령에 의해 일정기간 보관이 필요한 개인정보의 경우, 해당 법령의 규정에 따라 보관합니다.
      </h3>
      <h3 className='terms__list_second'>&lt;내부정책에 의한 정보보유 사유&gt;</h3>
      <ol className='terms__list_third'>
        <li>
          - 보유 정보: 아이디, CI(암호화된 동일인 식별정보), 여권번호/해외 거주 증명 ID카드 번호
          <ol className='terms__list_fourth'>
            <li>보유 이유: 재가입 신청 방지</li>
            <li>보존 기간: 탈퇴 후 30일간 보관</li>
          </ol>
        </li>
        <li>
          - 보유정보 : 고객신원확인 대상자의 성명, 성별, 국적, 생년월일, CI, 주민등록번호, 여권번호, 거주지 주소, 연락처
          <ol className='terms__list_fourth'>
            <li>보존이유 : 특정금융거래정보의 보고 및 이용등에 관한 법률 제 5조의 2 및 동법 시행령 제 10조의 4에 따라 수집 및 보유</li>
            <li>보유 기간 : 탈퇴 후 5년간 보관</li>
          </ol>
        </li>
        <li>
          - 보유 정보: 개인 판매회원의 CI(암호화된 동일인 식별정보)
          <ol className='terms__list_fourth'>
            <li>보유 이유: 밋유 스토어 부정 이용 및 가입방지</li>
            <li>보존 기간: 3년</li>
          </ol>
        </li>
      </ol>
      <h4 className='terms__list_first'>그 밖의 사항은 (주)루나스타 Business Partner 개인정보 처리방침에 따릅니다.</h4>
    </div>
  ),
  [TERMS_TYPE.TRANSACTION]: <div></div>,
};
