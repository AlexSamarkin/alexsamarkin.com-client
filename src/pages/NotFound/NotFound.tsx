import React, { useMemo } from "react";
import { Locale } from "../../types";
import translates from "../../lang";

export const NotFound: React.FC<{ lang: Locale }> = (props) => {
  const { lang } = props;
  const t = useMemo(() => translates(lang), [lang]);

  return (
    <>
      <div className="pb-0 pb-sm-2">
        <h1 className="title title--h1 first-title title__separate">
          {t("headers.notFound")}
        </h1>
        {t("text.notFound")}
      </div>
    </>
  );
};

export default NotFound;
