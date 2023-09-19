/** @format */
import Banner from "../banner";
import Meta from "../meta";
import Projects from "../projects";

export default function Home() {
  return (
    <div>
      <Meta
        title="Imani Brown | Home"
        description="Information about imani brown a full stack web developer"
      />

      <Banner />
      <Projects />
    </div>
  );
}
