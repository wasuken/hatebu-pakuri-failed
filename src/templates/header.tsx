import { useState } from "react";

import MainIcon from "../atoms/MainIcon.tsx";
import SearchBox from "../molecules/SearchBox.tsx";
import ConfigButton from "../atoms/ConfigButton.tsx";
import AccountButton from "../atoms/AccountButton.tsx";

import "./header.scss";

export default function Header() {
  const [query, setQuery] = useState<string[]>([]);
  const suggests = ["test"];
  return (
    <div className="header">
      <MainIcon />
      <SearchBox setQuery={setQuery} query={query} suggests={suggests} />
      <ConfigButton />
      <AccountButton />
    </div>
  );
}
