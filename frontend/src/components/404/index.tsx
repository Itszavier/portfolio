/** @format */
import style from "./style.module.css";
import Meta from "../meta";

export default function NotFound() {
  return (
    <div className={style.content}>
      <Meta title="Imani brown | 404" description="404 page" />
      <div className={style.wrapper}>
        <h2>404 - Not Found</h2>
        <p>
          404 Error: The humor you're looking for seems to have gone on
          vacation. Try refreshing the page—maybe it'll come back with some
          jokes!
        </p>
      </div>
    </div>
  );
}
