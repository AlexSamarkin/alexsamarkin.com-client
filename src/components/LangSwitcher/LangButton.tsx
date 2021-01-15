import React, { useCallback } from "react";
import { Locale } from "../../types";

export interface Props {
  lang: Locale;
  active: boolean;
  onChange: (lang: Locale) => void;
}

export const LangButton: React.FC<Props> = (props) => {
  const { lang, active, onChange } = props;
  const className = `btn btn-secondary ${active ? "active" : undefined}`;
  const handleChange = useCallback(
    (_: React.SyntheticEvent) => {
      if (!active) onChange(lang);
    },
    [lang, onChange, active]
  );
  return (
    <label className={className}>
      <input
        onClick={handleChange}
        type="radio"
        name="options"
        id={lang}
        autoComplete="off"
      />{" "}
      {lang.toUpperCase()}
    </label>
  );
};

export default LangButton;
