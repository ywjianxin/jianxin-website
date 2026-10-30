// Add a category here, then run `npm run pages`. Keep slugs unique and URL-safe.
export const categories = [
  {slug:'outdoor',name:'캠핑·아웃도어용품',en:'OUTDOOR',intro:'야외 활동에 필요한 비식품용 소품을 중심으로 용도와 사양에 맞는 상품을 찾아봅니다.',examples:['장비 수납 파우치','일반 방수 가방','야외 활동용 정리 소품'],checks:['사용 환경과 소재','사이즈 및 방수 성능의 확인 방법','포장 방식과 주문 수량'],shape:'outdoor'},
  {slug:'pet',name:'반려동물용품',en:'PET ACCESSORIES',intro:'반려동물의 일상에 사용하는 소품을 중심으로 소재, 크기와 사용 목적을 확인합니다.',examples:['반려동물 리드줄','산책용 파우치','반려동물 매트'],checks:['대상 동물과 사용 목적','소재와 내구성 확인','사이즈 및 세탁 방법'],shape:'pet'},
  {slug:'storage',name:'수납·정리용품',en:'STORAGE & ORGANIZATION',intro:'생활 공간과 업무 공간을 정리하는 비식품용 수납 소품의 소싱을 지원합니다.',examples:['서랍 정리함','의류 수납 파우치','데스크 정리 트레이'],checks:['외부 치수와 내부 치수','소재 및 마감','조립 여부와 포장 부피'],shape:'storage'},
  {slug:'automotive',name:'차량용품',en:'AUTO ACCESSORIES',intro:'차량용 정리·수납 소품을 중심으로 적용 차종과 설치 방식을 확인합니다.',examples:['트렁크 정리함','시트 수납 포켓','차량용 정리 파우치'],checks:['적용 차종 및 설치 위치','소재와 고정 방식','운전 시야 및 안전에 미치는 영향'],shape:'automotive'},
  {slug:'sports',name:'스포츠·레저용품',en:'SPORTS & LEISURE',intro:'스포츠와 여가 활동에 필요한 일반 소품을 용도에 맞춰 탐색합니다.',examples:['덤벨','요가 매트','일반 운동 소품'],checks:['활동 유형과 대상 사용자','소재와 사용 시 주의사항','샘플 및 품질 확인 범위'],shape:'sports'},
  {slug:'apparel',name:'의류·패션잡화',en:'APPAREL',intro:'성인용 의류를 중심으로 소재, 사이즈와 제작 조건을 비교합니다.',examples:['성인용 티셔츠','성인용 셔츠','성인용 일상 바지'],checks:['원단 혼용률과 치수표','색상 및 봉제 마감','한국어 표시사항 및 세탁 안내'],shape:'apparel'},
  {slug:'fashion',name:'액세서리·패션소품',en:'FASHION ACCESSORIES',intro:'성인용 패션 소품의 디자인과 소재를 확인하고 구매 조건을 비교합니다.',examples:['성인용 귀걸이·목걸이','헤어 액세서리','장신구 부자재'],checks:['사용 소재와 마감','디자인 권리 확인','표시사항 및 포장 조건'],shape:'fashion'},
  {slug:'office',name:'문구·사무용품',en:'STATIONERY & OFFICE',intro:'성인용 문구와 일반 사무용 소품을 중심으로 규격과 구매 조건을 비교합니다.',examples:['필기구','업무용 노트','데스크 정리 용품'],checks:['사용 대상과 소재','규격 및 표시사항','인쇄 및 포장 조건']},
  {slug:'daily',name:'생활잡화',en:'DAILY ESSENTIALS',intro:'일상에서 사용하는 일반 비식품 접촉용 생활 소품을 탐색합니다.',examples:['청소용 브러시','생활용 패브릭 소품','일반 정리 소품'],checks:['구체적인 사용 목적','소재와 세탁·관리 방법','한국 수입 및 표시 요건']},
  {slug:'custom',name:'기타 맞춤 소싱',en:'CUSTOM SOURCING',intro:'목록에 없는 상품도 참고 이미지와 요구 조건을 바탕으로 소싱 가능 여부를 함께 확인합니다.',examples:['고객이 제안한 일반 상품','사양에 맞춘 포장 소품','여러 카테고리의 통합 구매'],checks:['참고 이미지와 구체적인 용도','예상 주문 수량 및 희망 조건','규제 적용 여부와 공급 가능 범위']}

];
export const services = [
 {slug:'sourcing',name:'상품 소싱',en:'PRODUCT SOURCING',intro:'이우 현지 시장과 중국 공급처에서 고객의 요구에 맞는 상품 후보를 찾습니다.',scope:['참고 이미지와 구매 목적 정리','상품 사양 및 공급 가능 여부 문의','후보 상품 정보 비교'],prepare:['관심 품목과 참고 이미지 또는 링크','예상 수량과 목표 가격','판매 채널 및 필요한 납기']},
 {slug:'suppliers',name:'공장 · 공급처 연결',en:'SUPPLIER MATCHING',intro:'상품 특성과 구매 조건에 맞는 공장 및 공급처 후보를 탐색하고 협의를 지원합니다.',scope:['공급처 후보 탐색','제작 가능 범위 및 최소 주문 수량 문의','샘플과 납기 관련 협의 지원'],prepare:['제품 사양과 필요한 제작 방식','예상 발주 수량','샘플 및 맞춤 제작 요구사항']},
 {slug:'quotations',name:'견적 · 가격 비교',en:'QUOTATION COMPARISON',intro:'단가뿐 아니라 수량, 포장과 납기를 함께 살펴보고 비교 가능한 구매 정보를 정리합니다.',scope:['공급처별 견적 확인','최소 주문 수량 및 납기 비교','포함 비용과 별도 비용 구분'],prepare:['동일 비교에 필요한 제품 사양','구매 수량 및 포장 조건','희망 납기와 수령 조건']},
 {slug:'purchasing',name:'통합 구매 지원',en:'PURCHASING SUPPORT',intro:'여러 상품과 공급처의 구매 정보를 정리하고 합의된 범위 안에서 주문 진행을 지원합니다.',scope:['상품 및 공급처별 주문 정보 정리','주문 진행 상황 소통','포장·출고 및 운송 관련 협의 지원'],prepare:['선정 상품과 공급처 정보','수량, 포장 및 출고 요청사항','검사와 운송 지원이 필요한 범위']}
];

// Homepage order and local image-sheet positions; new categories can use their own image.
const order=['outdoor','pet','storage','automotive','apparel','fashion','sports','office','daily','custom'];
categories.sort((a,b)=>order.indexOf(a.slug)-order.indexOf(b.slug));
categories.forEach((item,index)=>{item.tile=index;});
