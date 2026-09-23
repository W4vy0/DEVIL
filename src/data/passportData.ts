export interface SuccubusProfile {
  id: 'seoyun' | 'seoa';
  nameKo: string;
  nameEn: string;
  roleTitleKo: string;
  documentNo: string;
  photoUrl: string;
  species: string;
  sex: string;
  status: string;
  destination: string;
  destinationKo: string;
  purpose: string;
  disguise: string;
  energyType: string;
  validity: string;
  issueDate: string;
  signature: string;
  assignedDisguiseId: string;
  handwrittenMemo: {
    text: string;
    author: string;
    color: string;
    align: 'left' | 'right';
  };
}

export const SEOYUN_DATA: SuccubusProfile = {
  id: 'seoyun',
  nameKo: '한서윤',
  nameEn: 'HAN SEOYUN',
  roleTitleKo: '정식 서큐버스 (언니)',
  documentNo: 'HL-2026-SY0184',
  photoUrl: 'https://igx.kr/v/nkc/B/3',
  species: 'SUCCUBUS',
  sex: 'F',
  status: 'LICENSED',
  destination: 'REPUBLIC OF KOREA',
  destinationKo: '대한민국',
  purpose: 'HUMAN WORLD RESIDENCE',
  disguise: 'HUMAN',
  energyType: 'VITAL ENERGY',
  validity: 'APPROVED',
  issueDate: '2026.09.23',
  signature: 'Han Seoyun',
  assignedDisguiseId: 'KR-SEO-980412-2',
  handwrittenMemo: {
    text: '“정말 인간계에서 둘이서 잘할 수 있을까…?”',
    author: '서윤',
    color: '#65a30d', // fresh lime green
    align: 'left',
  },
};

export const SEOA_DATA: SuccubusProfile = {
  id: 'seoa',
  nameKo: '한서아',
  nameEn: 'HAN SEOA',
  roleTitleKo: '정식 서큐버스 (동생)',
  documentNo: 'HL-2026-SA0185',
  photoUrl: 'https://igx.kr/v/nkc/B/1',
  species: 'SUCCUBUS',
  sex: 'F',
  status: 'LICENSED',
  destination: 'REPUBLIC OF KOREA',
  destinationKo: '대한민국',
  purpose: 'HUMAN WORLD RESIDENCE',
  disguise: 'HUMAN',
  energyType: 'VITAL ENERGY',
  validity: 'APPROVED',
  issueDate: '2026.09.23',
  signature: 'Han Seoa',
  assignedDisguiseId: 'KR-SEO-010729-4',
  handwrittenMemo: {
    text: '“별거 있겠어? 정기만 잘 챙기면 되지 ♥”',
    author: '서아',
    color: '#e11d48', // rose crimson / pink
    align: 'right',
  },
};

export interface GuidelineItem {
  num: string;
  rule: string;
  annotation?: string;
  category?: string;
}

export const GUIDELINES: GuidelineItem[] = [
  {
    num: '01',
    rule: '인간사회에서는 기본적으로 인간형을 유지하십시오.\n뿔·날개·꼬리 등 종족을 특정할 수 있는 신체적 특징의 노출을 금합니다.',
    category: '은폐 및 외형 유지',
  },
  {
    num: '02',
    rule: '인간에게 자신의 정체를 함부로 밝히지 마십시오.\n정체가 발각될 경우 상황에 따라 지옥관리국에 보고하십시오.',
    category: '기밀 준수',
  },
  {
    num: '03',
    rule: '정기는 반드시 주기적으로 관리하십시오.\n장기간 방치하여 위험수치까지 떨어지지 않도록 주의하십시오.',
    category: '생체 유지 관리',
  },
  {
    num: '04',
    rule: '비행·최면 등 서큐버스 고유능력의 무분별한 사용을 금합니다.\n능력 사용에는 정기가 소모됩니다.',
    category: '마력 규제',
  },
  {
    num: '05',
    rule: '최면은 상대의 정신상태에 따라 실패할 수 있습니다.\n시전 과정에서 역최면이 발생할 가능성이 있으므로 주의하십시오.',
    category: '정신 간섭 주의',
  },
  {
    num: '06',
    rule: '인간사회에서 발생하는 문제는 가능한 인간의 방식으로 해결하십시오.\n악마의 능력은 최후의 수단으로 사용할 것을 권고합니다.',
    category: '현지화 원칙',
  },
  {
    num: '07',
    rule: '특정 인간에게 지나치게 의존하지 마십시오.',
    category: '심리적 금기',
  },
  {
    num: '08',
    rule: '특정 인간에게 필요 이상의 감정적 애착을 갖지 마십시오.',
    category: '심리적 금기',
  },
];

export interface EnergyStage {
  range: string;
  status: string;
  labelKo: string;
  desc: string;
  color: string;
  badgeBg: string;
  minVal: number;
  maxVal: number;
}

export const ENERGY_STAGES: EnergyStage[] = [
  {
    range: '71—100',
    status: 'STABLE',
    labelKo: '안정 상태',
    desc: '정기충분 / 신체·능력정상. 모든 인지 기능과 인간형 의태가 완전하게 안정되어 있음.',
    color: '#15803d',
    badgeBg: 'rgba(21, 128, 61, 0.1)',
    minVal: 71,
    maxVal: 100,
  },
  {
    range: '31—70',
    status: 'NORMAL',
    labelKo: '보통 상태',
    desc: '정상활동가능 / 필요시정기보충권장. 일상 생활에는 지장이 없으나 장기 능력 소모에 주의 필요.',
    color: '#0369a1',
    badgeBg: 'rgba(3, 105, 161, 0.1)',
    minVal: 31,
    maxVal: 70,
  },
  {
    range: '01—30',
    status: 'WARNING',
    labelKo: '경고 상태',
    desc: '본능활성화 / 체온상승 / 감각과민 / 접촉욕구증가 / 집중력저하. 의태 유지에 급격한 피로 누적.',
    color: '#d97706',
    badgeBg: 'rgba(217, 119, 6, 0.1)',
    minVal: 1,
    maxVal: 30,
  },
  {
    range: '00',
    status: 'EMPTY',
    labelKo: '고갈 상태',
    desc: '극심한탈진 / 서큐버스능력사용불가. 긴급 바이탈 수급 전까지 신체 마비 및 종족 특징 노출 위험.',
    color: '#b91c1c',
    badgeBg: 'rgba(185, 28, 28, 0.1)',
    minVal: 0,
    maxVal: 0,
  },
];

export interface IntakeMethod {
  name: string;
  gauge: string;
  efficiency: string;
  desc: string;
  recoveryVal: number;
}

export const INTAKE_METHODS: IntakeMethod[] = [
  {
    name: '손잡기',
    gauge: '▰□□□□',
    efficiency: '극소량',
    desc: '단순한 피부 말단 접촉을 통한 미세 정기 전도. 긴급 시 아주 미약한 안정 효과.',
    recoveryVal: 5,
  },
  {
    name: '포옹·밀착',
    gauge: '▰□□□□',
    efficiency: '극소량',
    desc: '신체 접촉 면적 확대를 통한 체온 및 잔여 파동 수렴. 완만한 감정 공명 발생.',
    recoveryVal: 12,
  },
  {
    name: '키스',
    gauge: '▰▰▰□□',
    efficiency: '효율높음',
    desc: '호흡 및 구강 점막 교감을 통한 신속한 바이탈 에너지 대량 유입. 빠른 수치 회복 가능.',
    recoveryVal: 45,
  },
  {
    name: '직접적인 점막접촉',
    gauge: '▰▰▰▰▰',
    efficiency: '주요 정기수급 방식',
    desc: '서큐버스 종족의 완전한 에너지 공명 경로. 대량 흡수 및 고갈 상태에서의 즉각적 정상화.',
    recoveryVal: 85,
  },
];

