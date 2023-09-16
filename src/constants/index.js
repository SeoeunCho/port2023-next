import about from "../assets/img/about.jpg";
import project01 from "../assets/img/portfolio01-thumbnail.png";

export const headerNav = [
  {
    id: 1,
    title: "intro",
    url: "#intro",
  },
  {
    id: 2,
    title: "skill",
    url: "#skill",
  },
  {
    id: 3,
    title: "site",
    url: "#site",
  },
  {
    id: 4,
    title: "portfolio",
    url: "#port",
  },
  {
    id: 5,
    title: "contact",
    url: "#contact",
  },
];

export const introText = {
  title: "frontend developer",
  desc: ["talent is", "fount at the end of the", "effort"],
  imgUrl: about,
};

export const skillText = [
  {
    title: "꿈을 설계하고 디자인하다.",
    desc: "나는 공간을 만드는 것을 좋아한다. 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인거 같다. 그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 살고 싶다.",
  },
  {
    title: "열심히 할수록 기회는 따른다.",
    desc: "운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다.",
  },
  {
    title: "나에게 정직하다.",
    desc: "정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다.",
  },
];

export const siteText = [
  {
    text: ["make", "portfolio site with", "vite"],
    title: "Vite를 이용한 사이트 제작",
    code: "https://github.com/SeoeunCho/port2023-vite",
    view: "https://port2023-vite.netlify.app",
    info: ["site coding", "period : two days", "use stack : Vite, html5/css3, CSS Variable, gsap, lenis, netlify"],
  },
  {
    text: ["make", "portfolio site with", "react"],
    title: "리액트를 이용한 사이트 제작",
    code: "https://github.com/SeoeunCho/port2023-react",
    view: "https://port2023-react.netlify.app",
    info: ["site coding", "production period : two days", "use stack : react.js, HTML5/SCSS, CSS Variable, gsap, lenis, netlify"],
  },
  {
    text: ["make", "portfolio site with", "vue.js"],
    title: "뷰를 이용한 사이트 제작",
    code: "https://github.com/SeoeunCho/port2023-vue",
    view: "https://port2023-vue.netlify.app",
    info: ["site coding", "production period : one days", "use stack : vue.js, HTML5/SCSS, CSS Variable, gsap, lenis, netlify"],
  },
  {
    text: ["make", "portfolio site with", "next.js"],
    title: "넥스트를 이용한 사이트 제작",
    code: "https://github.com/SeoeunCho/port2023-next",
    view: "https://port2023-next.netlify.app",
    info: ["site coding", "production period : one days", "use stack : next.js, HTML5/SCSS, CSS Variable, gsap, lenis, netlify"],
  },
];

export const portText = [
  {
    num: "01",
    title: "첫 번째로 만든 포트폴리오",
    desc: "2021년도에 처음으로 제작한 포트폴리오입니다. 반응형으로 제작했으며, transition/transform/animation등 다양한 CSS 속성을 사용하여 동적으로 움직이는 요소로 재미를 더했습니다. 이 사이트는 개발자 유튜버 webstoryboy가 주최한 스터디 그룹에서 3개월간 JavaScript, Vue.js, React.js, php등을 배우며 제작한 프로젝트들을 확인해보실 수 있습니다.",
    img: project01,
    code: "https://github.com/SeoeunCho/Portfolio01",
    view: "https://SeoeunCho.github.io/Portfolio01/",
    name: "첫 번째 포트폴리오",
  },
  {
    num: "02",
    title: "GC녹십자아이메드 리뉴얼 사이트",
    desc: "처음으로 제작한 리뉴얼 웹사이트입니다. 모든 과정을 100% 개인작업으로 진행했고, 건강/의학사이트의 특성상 다양한 연령층의 사용자를 위해 검색창과 아이콘, 배너로 빠른 의미전달을 돕고자 했습니다. 홈페이지와 더불어 서브페이지, 모바일버전, 기획서까지 정성을 가득 담아 작업했습니다.",
    img: project01,
    code: "https://github.com/SeoeunCho/renewal1",
    view: "https://SeoeunCho.github.io/renewal1/",
    name: "GC녹십자아이메드 리뉴얼 포트폴리오",
  },
  {
    num: "03",
    title: "espoir 리뉴얼 사이트",
    desc: "에스쁘아의 웹사이트를 통해 제품의 광고효과와 수익창출을 높일 수 있도록 리뉴얼한 작업물입니다. 다양한 상품을 섹션별로 배치하였으며 장바구니/구매/찜하기 아이콘을 배치하였습니다. 기획-디자인-퍼블리싱 그리고 Overview까지 제작했습니다.",
    img: project01,
    code: "https://github.com/SeoeunCho/renewal2",
    view: "https://SeoeunCho.github.io/renewal2/",
    name: "에스쁘아 리뉴얼 사이트",
  },
  {
    num: "04",
    title: "노란우산 리뉴얼 사이트",
    desc: "모바일 웹사이트입니다. 빠른 정보취득을 위해 상단에 로그인과 퀵메뉴, 하단에 고객센터를 구성했습니다. 또한 노란우산을 처음 접한 사용자의 이해를 돕기위해 아코디언 안내메뉴와 유튜브영상을 배치했습니다.",
    img: project01,
    code: "https://github.com/SeoeunCho/renewal3_mobile",
    view: "https://SeoeunCho.github.io/renewal3_mobile/",
    name: "노란우산 리뉴얼 사이트",
  },
  {
    num: "05",
    title: "메가박스 반응형 사이트",
    desc: "웹표준을 준수하며 모든 기기에 유연하게 대응하는 반응형사이트입니다. Swiper 플러그인을 적용하여 배너와 차트 탭, 이미지 슬라이드, 동영상 등 다양하면서도 편리한 기능을 담은 기업형 웹사이트로 작업했습니다.",
    img: project01,
    code: "https://github.com/SeoeunCho/MegaboxSite",
    view: "https://SeoeunCho.github.io/MegaboxSite/",
    name: "메가박스 반응형 사이트",
  },
];

export const contactText = [
  {
    link: "",
    title: "Phone : 010-8577-4978",
  },
  {
    link: "mailto:jowestsilver@gmail.com",
    title: "mail : jowestsilver@gmail.com",
  },
];

export const footerText = [
  {
    title: "resume",
    desc: "노션으로 작성한 이력서를 확인할 수 있습니다. 경력기술서도 첨부되어 있습니다.",
    link: "https://enchanting-drip-66d.notion.site/661e000688d04abf94686ae02d8983ff?pvs=4",
  },
  {
    title: "github",
    desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
    link: "https://github.com/SeoeunCho",
  },
  {
    title: "portfolio",
    desc: "처음으로 제작한 포트폴리오 사이트를 둘러보세요.",
    link: "https://SeoeunCho.github.io/Portfolio01/",
  },
];
