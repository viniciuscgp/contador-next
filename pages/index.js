import Contador from "../components/Contador";
import style from "../styles/Home.module.css";
export default function Home()
{
  return (
    <div className={style.container}>
      <Contador valor={1} />
      <Contador valor={1} />

      <Contador valor={1} />
      <Contador valor={1} />

      <Contador valor={1} />
      <Contador valor={1} />
    </div>
  )
}
