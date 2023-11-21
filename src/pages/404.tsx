import type { ReactElement } from "react";
import Error from "next/error";

function Custom404() {
  return (
    <div>
      <div>These is error bitch</div>
      <Error statusCode={404} />;
    </div>

  );
}

Custom404.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Custom404;
