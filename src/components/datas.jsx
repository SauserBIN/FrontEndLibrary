const Datas = {
  inputs: {
    item: "",
    mean: "",
    Types: "",
  },
  datas: [
    {
      id: 1,
      item: "map",
      mean: "배열의 각 요소에 대해 주어진 함수를 적용하여 새로운 배열을 반환하는 메서드",
      Types: "javascript",
    },
    {
      id: 2,
      item: "filter",
      mean: "배열의 각 요소에 대해 주어진 조건을 만족하는 요소들만 추출하여 새로운 배열을 반환하는 메서드",
      Types: "javascript",
    },
    {
      id: 3,
      item: "reduce",
      mean: "배열의 요소들을 누적하여 단일 값으로 변환하는 메서드",
      Types: "javascript",
    },
    {
      id: 4,
      item: "forEach",
      mean: "배열의 각 요소에 대해 주어진 함수를 실행하는 메서드",
      Types: "javascript",
    },
    {
      id: 5,
      item: "find",
      mean: "배열의 요소 중 주어진 조건을 처음 만족하는 요소를 반환하는 메서드",
      Types: "javascript",
    },
    {
      id: 6,
      item: "includes",
      mean: "배열이나 문자열이 특정 값이나 문자를 포함하고 있는지 확인하는 메서드",
      Types: "javascript",
    },
    {
      id: 7,
      item: "sort",
      mean: "배열의 요소들을 지정된 기준에 따라 정렬하는 메서드",
      Types: "javascript",
    },
    {
      id: 8,
      item: "push",
      mean: "배열의 끝에 새로운 요소를 추가하는 메서드",
      Types: "javascript",
    },
    {
      id: 9,
      item: "pop",
      mean: "배열의 마지막 요소를 제거하고 반환하는 메서드",
      Types: "javascript",
    },
    {
      id: 10,
      item: "shift",
      mean: "배열의 첫 번째 요소를 제거하고 반환하는 메서드",
      Types: "javascript",
    },
    {
      id: 11,
      item: "unshift",
      mean: "배열의 앞에 새로운 요소를 추가하는 메서드",
      Types: "javascript",
    },
    {
      id: 12,
      item: "splice",
      mean: "배열의 특정 위치에 새로운 요소를 추가하거나 기존 요소를 제거하는 메서드",
      Types: "javascript",
    },
    {
      id: 13,
      item: "slice",
      mean: "배열의 특정 부분을 새로운 배열로 반환하는 메서드",
      Types: "javascript",
    },
    {
      id: 14,
      item: "join",
      mean: "배열의 요소들을 특정 구분자로 연결하여 문자열로 반환하는 메서드",
      Types: "javascript",
    },
    {
      id: 15,
      item: "template literals",
      mean: "백틱(`)을 사용하여 문자열 내에서 변수를 삽입할 수 있는 방법",
      Types: "javascript",
    },
    {
      id: 16,
      item: "spread operator",
      mean: "배열이나 객체의 요소들을 개별적으로 분리하거나 결합할 때 사용하는 연산자",
      Types: "javascript",
    },
    {
      id: 17,
      item: "destructuring",
      mean: "배열이나 객체에서 특정 값들을 추출하여 변수에 할당하는 문법",
      Types: "javascript",
    },
    {
      id: 18,
      item: "rest operator",
      mean: "함수 파라미터에서 여러 개의 인자를 하나의 배열로 모으는 연산자",
      Types: "javascript",
    },
    {
      id: 19,
      item: "callback",
      mean: "특정 작업이 완료된 후 호출되는 함수",
      Types: "javascript",
    },
    {
      id: 20,
      item: "promise",
      mean: "비동기 작업의 결과를 처리하기 위한 객체",
      Types: "javascript",
    },
    {
      id: 21,
      item: "async/await",
      mean: "비동기 코드를 동기적으로 작성할 수 있게 하는 구문",
      Types: "javascript",
    },
    {
      id: 22,
      item: "DOM",
      mean: "웹 페이지의 구조를 표현하는 객체 모델",
      Types: "javascript",
    },
    {
      id: 23,
      item: "event listener",
      mean: "특정 이벤트가 발생할 때 실행될 함수를 등록하는 기능",
      Types: "javascript",
    },
    {
      id: 24,
      item: "event bubbling",
      mean: "이벤트가 하위 요소에서 상위 요소로 전파되는 방식",
      Types: "javascript",
    },
    {
      id: 25,
      item: "event delegation",
      mean: "상위 요소에 이벤트 리스너를 등록하여 하위 요소의 이벤트를 처리하는 방법",
      Types: "javascript",
    },
    {
      id: 26,
      item: "closure",
      mean: "함수가 생성될 때의 환경을 유지하여 이후에도 접근할 수 있게 하는 개념",
      Types: "javascript",
    },
    {
      id: 27,
      item: "hoisting",
      mean: "변수와 함수의 선언이 코드의 최상단으로 끌어올려지는 현상",
      Types: "javascript",
    },
    {
      id: 28,
      item: "prototype",
      mean: "javascript 객체의 상속을 위한 기반 객체",
      Types: "javascript",
    },
    {
      id: 29,
      item: "class",
      mean: "객체 지향 프로그래밍의 클래스 개념을 도입한 구문",
      Types: "javascript",
    },
    {
      id: 30,
      item: "constructor",
      mean: "클래스의 인스턴스를 생성할 때 호출되는 함수",
      Types: "javascript",
    },
    {
      id: 31,
      item: "this",
      mean: "현재 실행 중인 객체를 가리키는 키워드",
      Types: "javascript",
    },
    {
      id: 32,
      item: "arrow function",
      mean: "짧은 구문으로 함수를 정의하는 방법, `this` 바인딩을 유지",
      Types: "javascript",
    },
    {
      id: 33,
      item: "express",
      mean: "node 기반의 웹 프레임워크",
      Types: "node",
    },
    {
      id: 34,
      item: "npm",
      mean: "node 패키지 관리자",
      Types: "node",
    },
    {
      id: 35,
      item: "require",
      mean: "node에서 모듈을 불러오기 위한 구문",
      Types: "node",
    },
    {
      id: 36,
      item: "module.exports",
      mean: "node에서 모듈을 외부에 내보내기 위한 구문",
      Types: "node",
    },
    {
      id: 37,
      item: "import/export",
      mean: "ES6 모듈 시스템에서 모듈을 불러오거나 내보내는 구문",
      Types: "javascript",
    },
    {
      id: 38,
      item: "hook",
      mean: "react에서 컴포넌트의 상태나 생명주기와 관련된 기능을 제공하는 함수",
      Types: "react",
    },
    {
      id: 39,
      item: "useState",
      mean: "react 컴포넌트에서 상태를 관리하기 위한 Hook",
      Types: "react",
    },
    {
      id: 40,
      item: "useEffect",
      mean: "react 컴포넌트에서 생명주기 이벤트를 처리하기 위한 Hook",
      Types: "react",
    },
    {
      id: 41,
      item: "useContext",
      mean: "react 컴포넌트에서 전역 상태를 사용할 수 있게 하는 Hook 로그인같은거.",
      Types: "react",
    },
    {
      id: 42,
      item: "component",
      mean: "react에서 재사용 가능한 UI 요소",
      Types: "react",
    },
    {
      id: 43,
      item: "props",
      mean: "부모 컴포넌트에서 자식 컴포넌트로 전달되는 값",
      Types: "react",
    },
    {
      id: 44,
      item: "state",
      mean: "컴포넌트 내부에서 관리되는 데이터",
      Types: "react",
    },
    {
      id: 45,
      item: "jsx",
      mean: "javascript와 XML의 혼합 구문, react 컴포넌트의 렌더링을 정의",
      Types: "react",
    },
    {
      id: 46,
      item: "render",
      mean: "react 컴포넌트에서 화면에 그릴 내용을 정의하는 메서드",
      Types: "react",
    },
    {
      id: 47,
      item: "DOM manipulation",
      mean: "DOM 요소를 추가, 수정, 삭제하는 작업",
      Types: "javascript",
    },
    {
      id: 48,
      item: "event handler",
      mean: "특정 이벤트가 발생할 때 실행되는 함수",
      Types: "javascript",
    },
    {
      id: 49,
      item: "javascript",
      mean: "프론트엔드와 백엔드 모두에서 사용되는 동적 스크립트 언어",
      Types: "javascript",
    },
    {
      id: 50,
      item: "browser",
      mean: "웹 페이지를 열고 javascript를 실행할 수 있는 프로그램",
      Types: "html",
    },

    {
      id: 51,
      item: "module",
      mean: "다른 부분에서 사용하기 위해 내보낼 수 있는 코드 블록",
      Types: "javascript",
    },
    {
      id: 52,
      item: "import",
      mean: "다른 모듈에서 코드를 가져오는 구문",
      Types: "javascript",
    },
    {
      id: 53,
      item: "export",
      mean: "모듈에서 코드를 외부로 내보내는 구문",
      Types: "javascript",
    },
    {
      id: 54,
      item: "promise chaining",
      mean: "여러 개의 프로미스를 연결하여 연속적인 비동기 작업을 처리하는 방법",
      Types: "javascript",
    },
    {
      id: 55,
      item: "rest parameter",
      mean: "함수에서 가변 길이의 파라미터를 하나의 배열로 받는 구문",
      Types: "javascript",
    },
    {
      id: 56,
      item: "spread syntax",
      mean: "배열이나 객체의 요소를 개별적으로 분리하여 전달하는 구문",
      Types: "javascript",
    },
    {
      id: 57,
      item: "IIFE",
      mean: "즉시 실행 함수 표현식, 선언과 동시에 실행되는 함수",
      Types: "javascript",
    },
    {
      id: 58,
      item: "strict mode",
      mean: "javascript에서 엄격한 규칙을 적용하여 잠재적 오류를 방지하는 모드",
      Types: "javascript",
    },
    {
      id: 59,
      item: "ES6",
      mean: "ECMAScript 6, javascript의 주요 업데이트 중 하나",
      Types: "javascript",
    },
    {
      id: 60,
      item: "CORS",
      mean: "다른 도메인 간 리소스 요청을 제어하는 메커니즘",
      Types: "html",
    },
    {
      id: 61,
      item: "htmlSocket",
      mean: "실시간 양방향 통신을 위한 프로토콜",
      Types: "html",
    },
    {
      id: 62,
      item: "server-side rendering",
      mean: "서버에서 페이지를 렌더링하여 클라이언트로 전달하는 방식",
      Types: "html",
    },
    {
      id: 63,
      item: "client-side rendering",
      mean: "클라이언트에서 페이지를 렌더링하는 방식",
      Types: "html",
    },
    {
      id: 64,
      item: "AJAX",
      mean: "비동기적으로 서버와 통신하여 데이터를 가져오는 기술",
      Types: "javascript",
    },
    {
      id: 65,
      item: "fetch",
      mean: "비동기 HTTP 요청을 보내는 메서드",
      Types: "javascript",
    },
    {
      id: 66,
      item: "XMLHttpRequest",
      mean: "AJAX 요청을 보내는 객체",
      Types: "javascript",
    },
    {
      id: 67,
      item: "JSON",
      mean: "javascript Object Notation, 데이터 교환을 위한 경량 포맷",
      Types: "javascript",
    },
    {
      id: 68,
      item: "localStorage",
      mean: "브라우저에 데이터를 영구적으로 저장하는 기능",
      Types: "html",
    },
    {
      id: 69,
      item: "sessionStorage",
      mean: "브라우저 세션 동안 데이터를 저장하는 기능",
      Types: "html",
    },
    {
      id: 70,
      item: "cookie",
      mean: "브라우저에 데이터를 저장하는 작은 파일",
      Types: "html",
    },
    {
      id: 71,
      item: "debugging",
      mean: "코드의 오류를 찾아 수정하는 과정",
      Types: "html",
    },
    {
      id: 72,
      item: "console",
      mean: "브라우저의 개발자 도구에서 로그를 출력하는 기능",
      Types: "javascript",
    },
    {
      id: 73,
      item: "log",
      mean: "콘솔에 메시지를 출력하는 메서드",
      Types: "javascript",
    },
    {
      id: 74,
      item: "warn",
      mean: "콘솔에 경고 메시지를 출력하는 메서드",
      Types: "javascript",
    },
    {
      id: 75,
      item: "error",
      mean: "콘솔에 오류 메시지를 출력하는 메서드",
      Types: "javascript",
    },
    {
      id: 76,
      item: "breakpoint",
      mean: "디버깅 중 코드 실행을 일시 정지하는 지점",
      Types: "html",
    },
    {
      id: 77,
      item: "source maps",
      mean: "빌드된 코드에서 원본 코드를 찾을 수 있게 도와주는 파일",
      Types: "javascript",
    },
    {
      id: 78,
      item: "event loop",
      mean: "javascript가 비동기 작업을 처리하는 메커니즘",
      Types: "javascript",
    },
    {
      id: 79,
      item: "callback queue",
      mean: "비동기 작업이 완료되면 실행할 함수를 저장하는 큐",
      Types: "javascript",
    },
    {
      id: 80,
      item: "microtask",
      mean: "작은 단위의 비동기 작업, 프로미스의 콜백이 실행되는 컨텍스트",
      Types: "javascript",
    },
    {
      id: 81,
      item: "macrotask",
      mean: "비동기 작업 중 큰 단위의 작업, setTimeout 같은 함수가 실행되는 컨텍스트",
      Types: "javascript",
    },
    {
      id: 82,
      item: "setTimeout",
      mean: "특정 시간 후에 코드를 실행하는 함수",
      Types: "javascript",
    },
    {
      id: 83,
      item: "setInterval",
      mean: "특정 시간 간격으로 코드를 반복 실행하는 함수",
      Types: "javascript",
    },
    {
      id: 84,
      item: "document",
      mean: "현재 웹 페이지의 DOM을 나타내는 객체",
      Types: "javascript",
    },
    {
      id: 85,
      item: "window",
      mean: "브라우저의 최상위 객체",
      Types: "javascript",
    },
    {
      id: 86,
      item: "requestAnimationFrame",
      mean: "브라우저의 애니메이션 프레임에 맞춰 코드를 실행하는 함수",
      Types: "javascript",
    },
    {
      id: 87,
      item: "event",
      mean: "사용자 입력 또는 시스템 변화에 반응하는 객체",
      Types: "javascript",
    },
    {
      id: 88,
      item: "innerHTML",
      mean: "DOM 요소의 내부 HTML을 가져오거나 설정하는 속성",
      Types: "javascript",
    },
    {
      id: 89,
      item: "innerText",
      mean: "DOM 요소의 내부 텍스트를 가져오거나 설정하는 속성",
      Types: "javascript",
    },
    {
      id: 90,
      item: "appendChild",
      mean: "DOM 요소에 자식 요소를 추가하는 메서드",
      Types: "javascript",
    },
    {
      id: 91,
      item: "removeChild",
      mean: "DOM 요소에서 자식 요소를 제거하는 메서드",
      Types: "javascript",
    },
    {
      id: 92,
      item: "getElementById",
      mean: "ID로 DOM 요소를 찾는 메서드",
      Types: "javascript",
    },
    {
      id: 93,
      item: "querySelector",
      mean: "CSS 셀렉터를 사용하여 DOM 요소를 찾는 메서드",
      Types: "javascript",
    },
    {
      id: 94,
      item: "querySelectorAll",
      mean: "여러 DOM 요소를 찾는 메서드",
      Types: "javascript",
    },
    {
      id: 95,
      item: "classList",
      mean: "DOM 요소의 클래스 목록을 나타내는 객체",
      Types: "javascript",
    },
    {
      id: 96,
      item: "addEventListener",
      mean: "특정 이벤트에 대한 이벤트 리스너를 추가하는 메서드",
      Types: "javascript",
    },
    {
      id: 97,
      item: "removeEventListener",
      mean: "이벤트 리스너를 제거하는 메서드",
      Types: "javascript",
    },
    {
      id: 98,
      item: "custom event",
      mean: "사용자가 정의한 이벤트",
      Types: "javascript",
    },
    {
      id: 99,
      item: "preventDefault",
      mean: "이벤트의 기본 동작을 막는 메서드",
      Types: "javascript",
    },
    {
      id: 100,
      item: "stopPropagation",
      mean: "이벤트 전파를 중지하는 메서드",
      Types: "javascript",
    },

    {
      id: 101,
      item: "addEventListener",
      mean: "특정 이벤트에 대한 이벤트 리스너를 추가하는 함수",
      Types: "javascript",
    },
    {
      id: 102,
      item: "removeEventListener",
      mean: "이벤트 리스너를 제거하는 함수",
      Types: "javascript",
    },
    {
      id: 103,
      item: "setTimeout",
      mean: "지정된 시간 후에 함수를 실행하는 함수",
      Types: "javascript",
    },
    {
      id: 104,
      item: "setInterval",
      mean: "지정된 시간 간격으로 함수를 반복 실행하는 함수",
      Types: "javascript",
    },
    {
      id: 105,
      item: "clearTimeout",
      mean: "setTimeout에 의해 예약된 작업을 취소하는 함수",
      Types: "javascript",
    },
    {
      id: 106,
      item: "clearInterval",
      mean: "setInterval에 의해 예약된 작업을 취소하는 함수",
      Types: "javascript",
    },
    {
      id: 107,
      item: "querySelector",
      mean: "CSS 셀렉터를 사용하여 DOM 요소를 찾는 함수",
      Types: "javascript",
    },
    {
      id: 108,
      item: "querySelectorAll",
      mean: "CSS 셀렉터를 사용하여 여러 DOM 요소를 찾는 함수",
      Types: "javascript",
    },
    {
      id: 109,
      item: "getElementById",
      mean: "ID로 DOM 요소를 찾는 함수",
      Types: "javascript",
    },
    {
      id: 110,
      item: "getElementsByClassName",
      mean: "클래스 이름으로 여러 DOM 요소를 찾는 함수",
      Types: "javascript",
    },
    {
      id: 111,
      item: "getElementsByTagName",
      mean: "태그 이름으로 여러 DOM 요소를 찾는 함수",
      Types: "javascript",
    },
    {
      id: 112,
      item: "appendChild",
      mean: "DOM 요소에 자식 요소를 추가하는 함수",
      Types: "javascript",
    },
    {
      id: 113,
      item: "removeChild",
      mean: "DOM 요소에서 자식 요소를 제거하는 함수",
      Types: "javascript",
    },
    {
      id: 114,
      item: "replaceChild",
      mean: "DOM 요소의 자식 요소를 다른 요소로 교체하는 함수",
      Types: "javascript",
    },
    {
      id: 115,
      item: "insertBefore",
      mean: "DOM 요소의 자식 요소 앞에 새로운 요소를 삽입하는 함수",
      Types: "javascript",
    },
    {
      id: 116,
      item: "insertAdjacentHTML",
      mean: "DOM 요소의 특정 위치에 HTML을 추가하는 함수",
      Types: "javascript",
    },
    {
      id: 117,
      item: "cloneNode",
      mean: "DOM 요소를 복제하는 함수",
      Types: "javascript",
    },
    {
      id: 118,
      item: "hasChildNodes",
      mean: "DOM 요소에 자식 요소가 있는지 확인하는 함수",
      Types: "javascript",
    },
    {
      id: 119,
      item: "createElement",
      mean: "새로운 DOM 요소를 생성하는 함수",
      Types: "javascript",
    },
    {
      id: 120,
      item: "createTextNode",
      mean: "텍스트 노드를 생성하는 함수",
      Types: "javascript",
    },
    {
      id: 121,
      item: "getComputedStyle",
      mean: "DOM 요소의 계산된 스타일을 가져오는 함수",
      Types: "javascript",
    },
    {
      id: 122,
      item: "scrollIntoView",
      mean: "DOM 요소를 뷰포트로 스크롤하여 가져오는 함수",
      Types: "javascript",
    },
    {
      id: 123,
      item: "focus",
      mean: "DOM 요소에 포커스를 주는 함수",
      Types: "javascript",
    },
    {
      id: 124,
      item: "blur",
      mean: "DOM 요소에서 포커스를 제거하는 함수",
      Types: "javascript",
    },
    {
      id: 125,
      item: "isConnected",
      mean: "DOM 요소가 DOM 트리에 연결되어 있는지 확인하는 함수",
      Types: "javascript",
    },
    {
      id: 126,
      item: "preventDefault",
      mean: "이벤트의 기본 동작을 막는 함수",
      Types: "javascript",
    },
    {
      id: 127,
      item: "stopPropagation",
      mean: "이벤트의 전파를 중지하는 함수",
      Types: "javascript",
    },
    {
      id: 128,
      item: "getBoundingClientRect",
      mean: "DOM 요소의 경계와 위치를 반환하는 함수",
      Types: "javascript",
    },
    {
      id: 129,
      item: "requestAnimationFrame",
      mean: "브라우저의 애니메이션 프레임에 맞춰 함수를 실행하는 함수",
      Types: "javascript",
    },
    {
      id: 130,
      item: "addEventListener",
      mean: "특정 이벤트에 대한 이벤트 리스너를 추가하는 함수",
      Types: "javascript",
    },
    {
      id: 131,
      item: "removeEventListener",
      mean: "이벤트 리스너를 제거하는 함수",
      Types: "javascript",
    },
    {
      id: 132,
      item: "matchMedia",
      mean: "미디어 쿼리를 사용하여 미디어 상태를 확인하는 함수",
      Types: "javascript",
    },
    {
      id: 133,
      item: "setAttribute",
      mean: "DOM 요소에 속성을 설정하는 함수",
      Types: "javascript",
    },
    {
      id: 134,
      item: "getAttribute",
      mean: "DOM 요소에서 속성을 가져오는 함수",
      Types: "javascript",
    },
    {
      id: 135,
      item: "removeAttribute",
      mean: "DOM 요소에서 속성을 제거하는 함수",
      Types: "javascript",
    },
    {
      id: 136,
      item: "toggleAttribute",
      mean: "DOM 요소에서 속성을 토글하는 함수",
      Types: "javascript",
    },
    {
      id: 137,
      item: "classList.add",
      mean: "DOM 요소에 클래스를 추가하는 함수",
      Types: "javascript",
    },
    {
      id: 138,
      item: "classList.remove",
      mean: "DOM 요소에서 클래스를 제거하는 함수",
      Types: "javascript",
    },
    {
      id: 139,
      item: "classList.toggle",
      mean: "DOM 요소에서 클래스를 토글하는 함수",
      Types: "javascript",
    },
    {
      id: 140,
      item: "classList.contains",
      mean: "DOM 요소에 특정 클래스가 있는지 확인하는 함수",
      Types: "javascript",
    },
    {
      id: 141,
      item: "window.open",
      mean: "새로운 브라우저 창이나 탭을 여는 함수",
      Types: "javascript",
    },
    {
      id: 142,
      item: "window.close",
      mean: "현재 브라우저 창이나 탭을 닫는 함수",
      Types: "javascript",
    },
    {
      id: 143,
      item: "window.alert",
      mean: "팝업 메시지를 표시하는 함수",
      Types: "javascript",
    },
    {
      id: 144,
      item: "window.confirm",
      mean: "사용자에게 확인 메시지를 표시하고 결과를 반환하는 함수",
      Types: "javascript",
    },
    {
      id: 145,
      item: "window.prompt",
      mean: "사용자에게 입력을 요청하는 메시지를 표시하는 함수",
      Types: "javascript",
    },
    {
      id: 146,
      item: "window.print",
      mean: "브라우저의 인쇄 대화상자를 여는 함수",
      Types: "javascript",
    },
    {
      id: 147,
      item: "fetch",
      mean: "비동기 HTTP 요청을 보내는 함수",
      Types: "javascript",
    },
    {
      id: 148,
      item: "XMLHttpRequest",
      mean: "AJAX 요청을 보내는 객체",
      Types: "javascript",
    },
    {
      id: 149,
      item: "eval",
      mean: "문자열로 된 javascript 코드를 실행하는 함수",
      Types: "javascript",
    },
    {
      id: 150,
      item: "Function",
      mean: "새로운 함수를 생성하는 내장 객체",
      Types: "javascript",
    },
    {
      id: 151,
      item: "div",
      mean: "다른 요소들을 그룹화하는 블록 레벨 컨테이너 태그",
      Types: "html"
    },
    {
      id: 152,
      item: "span",
      mean: "텍스트나 다른 요소를 인라인으로 그룹화하는 태그",
      Types: "html"
    },
    {
      id: 153,
      item: "p",
      mean: "문단을 나타내는 태그",
      Types: "html"
    },
    {
      id: 154,
      item: "a",
      mean: "하이퍼링크를 만드는 태그",
      Types: "html"
    },
    {
      id: 155,
      item: "h1",
      mean: "제목을 나타내는 태그 (1~6 단계)",
      Types: "html"
    },
    {
      id: 156,
      item: "ul",
      mean: "순서 없는 목록을 만드는 태그",
      Types: "html"
    },
    {
      id: 157,
      item: "ol",
      mean: "순서 있는 목록을 만드는 태그",
      Types: "html"
    },
    {
      id: 158,
      item: "li",
      mean: "목록 요소를 나타내는 태그",
      Types: "html"
    },
    {
      id: 159,
      item: "img",
      mean: "이미지를 삽입하는 태그",
      Types: "html"
    },
    {
      id: 160,
      item: "table",
      mean: "표를 만드는 태그",
      Types: "html"
    },
    {
      id: 161,
      item: "tr",
      mean: "표의 행을 나타내는 태그",
      Types: "html"
    },
    {
      id: 162,
      item: "td",
      mean: "표의 셀을 나타내는 태그",
      Types: "html"
    },
    {
      id: 163,
      item: "th",
      mean: "표의 헤더 셀을 나타내는 태그",
      Types: "html"
    },
    {
      id: 164,
      item: "thead",
      mean: "표의 헤더 부분을 그룹화하는 태그",
      Types: "html"
    },
    {
      id: 165,
      item: "tbody",
      mean: "표의 본문 부분을 그룹화하는 태그",
      Types: "html"
    },
    {
      id: 166,
      item: "tfoot",
      mean: "표의 푸터 부분을 그룹화하는 태그",
      Types: "html"
    },
    {
      id: 167,
      item: "form",
      mean: "사용자 입력을 위한 폼을 만드는 태그",
      Types: "html"
    },
    {
      id: 168,
      item: "input",
      mean: "사용자 입력을 받는 태그",
      Types: "html"
    },
    {
      id: 169,
      item: "textarea",
      mean: "여러 줄의 텍스트 입력을 위한 태그",
      Types: "html"
    },
    {
      id: 170,
      item: "button",
      mean: "클릭 가능한 버튼을 만드는 태그",
      Types: "html"
    },
    {
      id: 171,
      item: "label",
      mean: "폼 요소의 레이블을 지정하는 태그",
      Types: "html"
    },
    {
      id: 172,
      item: "select",
      mean: "드롭다운 목록을 만드는 태그",
      Types: "html"
    },
    {
      id: 173,
      item: "option",
      mean: "드롭다운 목록의 옵션을 나타내는 태그",
      Types: "html"
    },
    {
      id: 174,
      item: "iframe",
      mean: "다른 HTML 문서를 삽입하는 태그",
      Types: "html"
    },
    {
      id: 175,
      item: "link",
      mean: "외부 리소스를 연결하거나 스타일시트를 연결하는 태그",
      Types: "html"
    },
    {
      id: 176,
      item: "meta",
      mean: "메타데이터를 정의하는 태그",
      Types: "html"
    },
    {
      id: 177,
      item: "style",
      mean: "인라인 CSS를 정의하는 태그",
      Types: "html"
    },
    {
      id: 178,
      item: "script",
      mean: "JavaScript 코드를 삽입하는 태그",
      Types: "html"
    },
    {
      id: 179,
      item: "head",
      mean: "문서의 메타정보와 리소스를 정의하는 태그",
      Types: "html"
    },
    {
      id: 180,
      item: "body",
      mean: "문서의 본문을 나타내는 태그",
      Types: "html"
    },
    {
      id: 181,
      item: "header",
      mean: "문서의 헤더 부분을 나타내는 태그",
      Types: "html"
    },
    {
      id: 182,
      item: "footer",
      mean: "문서의 푸터 부분을 나타내는 태그",
      Types: "html"
    },
    {
      id: 183,
      item: "nav",
      mean: "내비게이션 메뉴를 나타내는 태그",
      Types: "html"
    },
    {
      id: 184,
      item: "article",
      mean: "독립적인 콘텐츠 블록을 나타내는 태그",
      Types: "html"
    },
    {
      id: 185,
      item: "section",
      mean: "문서의 섹션을 나타내는 태그",
      Types: "html"
    },
    {
      id: 186,
      item: "aside",
      mean: "보조 정보를 나타내는 태그",
      Types: "html"
    },
    {
      id: 187,
      item: "figure",
      mean: "이미지나 다이어그램을 나타내는 태그",
      Types: "html"
    },
    {
      id: 188,
      item: "figcaption",
      mean: "figure의 설명을 제공하는 태그",
      Types: "html"
    },
    {
      id: 189,
      item: "blockquote",
      mean: "인용구를 나타내는 태그",
      Types: "html"
    },
    {
      id: 190,
      item: "code",
      mean: "코드 블록을 나타내는 태그",
      Types: "html"
    },
    {
      id: 191,
      item: "pre",
      mean: "공백이 유지되는 사전 형식 텍스트를 나타내는 태그",
      Types: "html"
    },
    {
      id: 192,
      item: "br",
      mean: "줄바꿈을 만드는 태그",
      Types: "html"
    },
    {
      id: 193,
      item: "hr",
      mean: "수평선을 나타내는 태그",
      Types: "html"
    },
    {
      id: 194,
      item: "em",
      mean: "강조를 나타내는 인라인 태그",
      Types: "html"
    },
    {
      id: 195,
      item: "strong",
      mean: "강한 강조를 나타내는 인라인 태그",
      Types: "html"
    },
    {
      id: 196,
      item: "color",
      mean: "텍스트의 색상을 지정하는 속성",
      Types: "css"
    },
    {
      id: 197,
      item: "background-color",
      mean: "요소의 배경 색상을 지정하는 속성",
      Types: "css"
    },
    {
      id: 198,
      item: "font-size",
      mean: "텍스트의 글꼴 크기를 지정하는 속성",
      Types: "css"
    },
    {
      id: 199,
      item: "font-family",
      mean: "텍스트의 글꼴 종류를 지정하는 속성",
      Types: "css"
    },
    {
      id: 200,
      item: "font-weight",
      mean: "텍스트의 굵기를 지정하는 속성",
      Types: "css"
    },
    {
      id: 201,
      item: "line-height",
      mean: "텍스트의 줄 간격을 지정하는 속성",
      Types: "css"
    },
    {
      id: 202,
      item: "text-align",
      mean: "텍스트의 정렬을 지정하는 속성",
      Types: "css"
    },
    {
      id: 203,
      item: "margin",
      mean: "요소의 외부 여백을 지정하는 속성",
      Types: "css"
    },
    {
      id: 204,
      item: "padding",
      mean: "요소의 내부 여백을 지정하는 속성",
      Types: "css"
    },
    {
      id: 205,
      item: "border",
      mean: "요소의 테두리를 지정하는 속성",
      Types: "css"
    },
    {
      id: 206,
      item: "border-radius",
      mean: "요소의 테두리에 둥근 모서리를 지정하는 속성",
      Types: "css"
    },
    {
      id: 207,
      item: "width",
      mean: "요소의 너비를 지정하는 속성",
      Types: "css"
    },
    {
      id: 208,
      item: "height",
      mean: "요소의 높이를 지정하는 속성",
      Types: "css"
    },
    {
      id: 209,
      item: "display",
      mean: "요소의 표시 방식을 지정하는 속성",
      Types: "css"
    },
    {
      id: 210,
      item: "position",
      mean: "요소의 위치를 지정하는 속성",
      Types: "css"
    },
    {
      id: 211,
      item: "top",
      mean: "위치를 지정할 때 요소의 상단을 기준으로 하는 속성",
      Types: "css"
    },
    {
      id: 212,
      item: "bottom",
      mean: "위치를 지정할 때 요소의 하단을 기준으로 하는 속성",
      Types: "css"
    },
    {
      id: 213,
      item: "left",
      mean: "위치를 지정할 때 요소의 왼쪽을 기준으로 하는 속성",
      Types: "css"
    },
    {
      id: 214,
      item: "right",
      mean: "위치를 지정할 때 요소의 오른쪽을 기준으로 하는 속성",
      Types: "css"
    },
    {
      id: 215,
      item: "z-index",
      mean: "요소의 쌓이는 순서를 지정하는 속성",
      Types: "css"
    },
    {
      id: 216,
      item: "overflow",
      mean: "요소의 내용이 넘칠 때의 처리 방법을 지정하는 속성",
      Types: "css"
    },
    {
      id: 217,
      item: "overflow-x",
      mean: "가로 방향으로 넘칠 때의 처리 방법을 지정하는 속성",
      Types: "css"
    },
    {
      id: 218,
      item: "overflow-y",
      mean: "세로 방향으로 넘칠 때의 처리 방법을 지정하는 속성",
      Types: "css"
    },
    {
      id: 219,
      item: "white-space",
      mean: "공백과 줄바꿈의 처리 방법을 지정하는 속성",
      Types: "css"
    },
    {
      id: 220,
      item: "text-overflow",
      mean: "텍스트가 넘칠 때의 처리 방법을 지정하는 속성",
      Types: "css"
    },
    {
      id: 221,
      item: "visibility",
      mean: "요소의 가시성을 지정하는 속성",
      Types: "css"
    },
    {
      id: 222,
      item: "opacity",
      mean: "요소의 투명도를 지정하는 속성",
      Types: "css"
    },
    {
      id: 223,
      item: "background-image",
      mean: "요소의 배경 이미지를 지정하는 속성",
      Types: "css"
    },
    {
      id: 224,
      item: "background-repeat",
      mean: "배경 이미지의 반복 방법을 지정하는 속성",
      Types: "css"
    },
    {
      id: 225,
      item: "background-position",
      mean: "배경 이미지의 위치를 지정하는 속성",
      Types: "css"
    },
    {
      id: 226,
      item: "background-size",
      mean: "배경 이미지의 크기를 지정하는 속성",
      Types: "css"
    },
    {
      id: 227,
      item: "box-shadow",
      mean: "요소에 그림자를 지정하는 속성",
      Types: "css"
    },
    {
      id: 228,
      item: "text-shadow",
      mean: "텍스트에 그림자를 지정하는 속성",
      Types: "css"
    },
    {
      id: 229,
      item: "flex",
      mean: "플렉스 박스 컨테이너의 유연성을 지정하는 속성",
      Types: "css"
    },
    {
      id: 230,
      item: "flex-direction",
      mean: "플렉스 박스 컨테이너의 주 축 방향을 지정하는 속성",
      Types: "css"
    },
    {
      id: 231,
      item: "justify-content",
      mean: "플렉스 박스 컨테이너에서 요소들을 주 축에 따라 정렬하는 속성",
      Types: "css"
    },
    {
      id: 232,
      item: "align-items",
      mean: "플렉스 박스 컨테이너에서 요소들을 교차 축에 따라 정렬하는 속성",
      Types: "css"
    },
    {
      id: 233,
      item: "align-self",
      mean: "플렉스 박스 요소 자체의 정렬을 지정하는 속성",
      Types: "css"
    },
    {
      id: 234,
      item: "align-content",
      mean: "플렉스 박스 컨테이너에서 요소들의 정렬을 지정하는 속성",
      Types: "css"
    },
    {
      id: 235,
      item: "flex-wrap",
      mean: "플렉스 박스 컨테이너에서 요소의 줄바꿈을 지정하는 속성",
      Types: "css"
    },
    {
      id: 236,
      item: "transition",
      mean: "요소의 스타일 변경에 대한 애니메이션을 지정하는 속성",
      Types: "css"
    },
    {
      id: 237,
      item: "animation",
      mean: "요소의 애니메이션을 지정하는 속성",
      Types: "css"
    },
    {
      id: 238,
      item: "animation-name",
      mean: "애니메이션의 이름을 지정하는 속성",
      Types: "css"
    },
    {
      id: 239,
      item: "animation-duration",
      mean: "애니메이션의 지속 시간을 지정하는 속성",
      Types: "css"
    },
    {
      id: 240,
      item: "animation-timing-function",
      mean: "애니메이션의 속도 변화를 지정하는 속성",
      Types: "css"
    },
    {
      id: 241,
      item: "animation-delay",
      mean: "애니메이션 시작 전의 지연 시간을 지정하는 속성",
      Types: "css"
    },
    {
      id: 242,
      item: "animation-iteration-count",
      mean: "애니메이션의 반복 횟수를 지정하는 속성",
      Types: "css"
    },
    {
      id: 243,
      item: "animation-direction",
      mean: "애니메이션의 진행 방향을 지정하는 속성",
      Types: "css"
    },
    {
      id: 244,
      item: "animation-fill-mode",
      mean: "애니메이션이 끝난 후의 상태를 지정하는 속성",
      Types: "css"
    },
    {
      id: 245,
      item: "cursor",
      mean: "마우스 포인터의 모양을 지정하는 속성",
      Types: "css"
    },
    {
      id: 246,
      item: "user-select",
      mean: "사용자의 텍스트 선택 기능을 제어하는 속성",
      Types: "css"
    },
    {
      id: 247,
      item: "outline",
      mean: "요소의 외부 경계를 지정하는 속성",
      Types: "css"
    },
    {
      id: 248,
      item: "outline-width",
      mean: "외곽선의 너비를 지정하는 속성",
      Types: "css"
    },
    {
      id: 249,
      item: "outline-color",
      mean: "외곽선의 색상을 지정하는 속성",
      Types: "css"
    },
    {
      id: 250,
      item: "outline-style",
      mean: "외곽선의 스타일을 지정하는 속성",
      Types: "css"
    },
    {
      id: 251,
      item: "require",
      mean: "Node.js에서 모듈을 불러오는 구문",
      Types: "node"
    },
    {
      id: 252,
      item: "module.exports",
      mean: "Node.js에서 모듈을 내보내는 구문",
      Types: "node"
    },
    {
      id: 253,
      item: "exports",
      mean: "모듈의 외부 공개 부분을 정의하는 객체",
      Types: "node"
    },
    {
      id: 254,
      item: "npm",
      mean: "Node.js의 패키지 관리자",
      Types: "node"
    },
    {
      id: 255,
      item: "package.json",
      mean: "Node.js 프로젝트의 메타데이터를 저장하는 파일",
      Types: "node"
    },
    {
      id: 256,
      item: "callback",
      mean: "비동기 작업 후 호출되는 함수",
      Types: "node"
    },
    {
      id: 257,
      item: "event loop",
      mean: "Node.js에서 비동기 작업을 처리하는 메커니즘",
      Types: "node"
    },
    {
      id: 258,
      item: "asynchronous",
      mean: "비동기 작업을 처리하는 방식",
      Types: "node"
    },
    {
      id: 259,
      item: "express",
      mean: "Node.js를 위한 웹 프레임워크",
      Types: "node"
    },
    {
      id: 260,
      item: "middleware",
      mean: "Express에서 요청과 응답 사이에 실행되는 코드",
      Types: "node"
    },
    {
      id: 261,
      item: "router",
      mean: "Express에서 라우팅을 관리하는 객체",
      Types: "node"
    },
    {
      id: 262,
      item: "body-parser",
      mean: "Express에서 HTTP 요청의 본문을 해석하는 미들웨어",
      Types: "node"
    },
    {
      id: 263,
      item: "json",
      mean: "Node.js에서 JSON 형식의 데이터를 다루는 방법",
      Types: "node"
    },
    {
      id: 264,
      item: "fs",
      mean: "Node.js에서 파일 시스템에 접근하는 모듈",
      Types: "node"
    },
    {
      id: 265,
      item: "path",
      mean: "파일 및 디렉토리 경로를 처리하는 모듈",
      Types: "node"
    },
    {
      id: 266,
      item: "http",
      mean: "Node.js에서 HTTP 서버와 클라이언트를 생성하는 모듈",
      Types: "node"
    },
    {
      id: 267,
      item: "net",
      mean: "네트워킹을 위한 저수준 모듈",
      Types: "node"
    },
    {
      id: 268,
      item: "os",
      mean: "운영체제 정보를 제공하는 모듈",
      Types: "node"
    },
    {
      id: 269,
      item: "cluster",
      mean: "Node.js에서 멀티프로세싱을 지원하는 모듈",
      Types: "node"
    },
    {
      id: 270,
      item: "worker threads",
      mean: "Node.js에서 멀티스레딩을 지원하는 모듈",
      Types: "node"
    },
    {
      id: 271,
      item: "events",
      mean: "이벤트 기반 프로그래밍을 위한 모듈",
      Types: "node"
    },
    {
      id: 272,
      item: "stream",
      mean: "데이터를 읽거나 쓰는 스트림을 다루는 모듈",
      Types: "node"
    },
    {
      id: 273,
      item: "buffer",
      mean: "이진 데이터를 다루는 버퍼 객체",
      Types: "node"
    },
    {
      id: 274,
      item: "process",
      mean: "Node.js 프로세스에 대한 정보를 제공하는 객체",
      Types: "node"
    },
    {
      id: 275,
      item: "global",
      mean: "Node.js의 전역 객체",
      Types: "node"
    },
    {
      id: 276,
      item: "console",
      mean: "Node.js의 콘솔 출력 객체",
      Types: "node"
    },
    {
      id: 277,
      item: "error handling",
      mean: "Node.js에서 오류를 처리하는 방법",
      Types: "node"
    },
    {
      id: 278,
      item: "dotenv",
      mean: "환경 변수를 로드하기 위한 패키지",
      Types: "node"
    },
    {
      id: 279,
      item: "crypto",
      mean: "암호화 작업을 위한 모듈",
      Types: "node"
    },
    {
      id: 280,
      item: "socket.io",
      mean: "Node.js에서 실시간 양방향 통신을 지원하는 라이브러리",
      Types: "node"
    },
    {
      id: 281,
      item: "useRef",
      mean: "React에서 DOM 요소나 변수의 참조를 유지하기 위한 Hook",
      Types: "react"
    },
    {
      id: 282,
      item: "virtual DOM",
      mean: "React에서 실제 DOM 대신 사용하는 가상 DOM 구조",
      Types: "react"
    },
    {
      id: 283,
      item: "higher-order component",
      mean: "다른 컴포넌트를 감싸서 새로운 기능을 추가하는 컴포넌트",
      Types: "react"
    },
    {
      id: 284,
      item: "key",
      mean: "리스트에서 각 요소를 고유하게 식별하기 위한 속성",
      Types: "react"
    },
    {
      id: 285,
      item: "componentDidMount",
      mean: "클래스 컴포넌트에서 컴포넌트가 마운트된 후 호출되는 메서드",
      Types: "react"
    },
    {
      id: 286,
      item: "componentWillUnmount",
      mean: "클래스 컴포넌트에서 컴포넌트가 언마운트되기 전에 호출되는 메서드",
      Types: "react"
    },
    {
      id: 287,
      item: "componentDidUpdate",
      mean: "클래스 컴포넌트에서 업데이트 후 호출되는 메서드",
      Types: "react"
    },
    {
      id: 288,
      item: "shouldComponentUpdate",
      mean: "클래스 컴포넌트에서 컴포넌트가 업데이트될지 결정하는 메서드",
      Types: "react"
    },
    {
      id: 289,
      item: "prop-types",
      mean: "React 컴포넌트의 속성 타입을 검사하는 라이브러리",
      Types: "react"
    },
    {
      id: 290,
      item: "Redux",
      mean: "React에서 상태 관리를 위한 라이브러리",
      Types: "react"
    },
    {
      id: 291,
      item: "reducer",
      mean: "Redux에서 상태를 업데이트하는 함수",
      Types: "react"
    },
    {
      id: 292,
      item: "dispatch",
      mean: "Redux에서 액션을 보내는 메서드",
      Types: "react"
    },
    {
      id: 293,
      item: "action",
      mean: "Redux에서 상태 변경을 나타내는 객체",
      Types: "react"
    },
    {
      id: 294,
      item: "store",
      mean: "Redux에서 상태를 저장하는 객체",
      Types: "react"
    },
    {
      id: 295,
      item: "middleware",
      mean: "Redux에서 액션을 처리하기 전에 추가 작업을 수행하는 함수",
      Types: "react"
    },
    {
      id: 296,
      item: "useReducer",
      mean: "Redux 패턴을 React Hook으로 구현한 함수",
      Types: "react"
    },
    {
      id: 297,
      item: "React Router",
      mean: "React에서 클라이언트 측 라우팅을 처리하는 라이브러리",
      Types: "react"
    },
    {
      id: 298,
      item: "Portal",
      mean: "React에서 다른 DOM 트리에 컴포넌트를 렌더링하는 기능",
      Types: "react"
    },
    {
      id: 299,
      item: "Fragment",
      mean: "불필요한 추가 DOM 요소 없이 여러 컴포넌트를 그룹화하는 기능",
      Types: "react"
    },
    {
      id: 300,
      item: "Suspense",
      mean: "비동기 컴포넌트를 로드할 때 대기 상태를 관리하는 기능",
      Types: "react"
    },
    {
      id: 301,
      item: "Error Boundary",
      mean: "React에서 컴포넌트 내 오류를 처리하는 컴포넌트",
      Types: "react"
    },
    {
      id: 302,
      item: "Context API",
      mean: "React에서 전역 상태 관리를 위한 기능",
      Types: "react"
    },
    {
      id: 303,
      item: "Profiler",
      mean: "React 컴포넌트의 성능을 측정하고 분석하는 도구",
      Types: "react"
    },
    {
      id: 304,
      item: "Concurrent Mode",
      mean: "React에서 여러 작업을 동시에 수행할 수 있게 하는 모드",
      Types: "react"
    },
    {
      id: 305,
      item: "Strict Mode",
      mean: "React 코드의 잠재적 문제를 발견하기 위한 모드",
      Types: "react"
    },
    {
      id: 306,
      item: "useMemo",
      mean: "React 컴포넌트에서 계산된 값을 캐싱하기 위한 Hook",
      Types: "react"
    },
    {
      id: 307,
      item: "useCallback",
      mean: "React 컴포넌트에서 함수를 캐싱하기 위한 Hook",
      Types: "react"
    },
    {
      id: 308,
      item: "Lazy",
      mean: "React에서 컴포넌트를 동적으로 로드하기 위한 함수",
      Types: "react"
    },
    {
      id: 309,
      item: "useImperativeHandle",
      mean: "React에서 부모 컴포넌트가 자식 컴포넌트의 메서드를 호출할 수 있게 하는 Hook",
      Types: "react"
    },
  ],
};


const Reducer = (state, action) => {
  switch (action.type) {
    case 'create': //추가
      return {
        inputs : Datas.inputs,
        datas: state.datas.concat(action.dic)
        
      };

    case 'delete': //삭제
      return {
        ...state,
        datas: state.datas.filter((item) => item.id !== action.id),
      };

    case 'update': //수정
      return {
        ...state,
        datas: state.datas.map((item)=>item.id === action.id ? {...item,mean:action.mean} : item)
      };
    case "search": //검색
      return{
        ...state,
        datas : state.datas.filter((item=>{return(
          item.item.toLowerCase().includes(action.text.toLowerCase())||
          item.mean.toLowerCase().includes(action.text.toLowerCase())
        )}))
      }
      // 여기가 search에서 App.jsx에 있는 search로 text를 보내주면, 그걸받은 searchWord의 속성이
      // input에서 맞는것을 찾아준것.
    default:
      return state;
  }
};

export{ Datas, Reducer }
