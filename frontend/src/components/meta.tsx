/** @format */

import { Helmet } from "react-helmet-async";

interface IProps {
  title: string;
  description: string;
}

export default function Meta(props: IProps) {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="author" content="Imani Brown" />s
      <meta name="description" content={props.description} />
    </Helmet>
  );
}
