import "@/assets/scss/style.scss";

export const metadata = {
  title: "Next-Site",
  description: "'Next.js' 하나의 사이트를 4가지 버전의 프레임워크를 통해 만든 포트폴리오입니다.",
  keywords: ["포트폴리오", "비트", "리액트", "뷰", "넥스트", "조서은", "Portfolio", "Vite", "React", "Vue.js", "NEXT.js", "SeoeunCho"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  );
}
