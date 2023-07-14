import { Header } from "@/components/Header/Header";
import css from "./page.module.css";
import { Main } from "@/components/Main/Main";

export default function Home() {
  return (
    <div className={css.container}>
      <Header/>
      <Main/>
    </div>
  )
}
