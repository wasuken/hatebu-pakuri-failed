import "./SearchBox.scss"
interface SearchBoxProps {
  setQuery: (s: string) => {};
  query: string;
  suggests: string[];
}
export default function SearchBox(props: SearchBoxProps) {
  const { setQuery, query, suggests } = props;
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onInput={(e) => setQuery(e.target.value)}
      />
      <button type="button" className="search-btn">
        <i class="fa fa-search"></i>
      </button>
      {suggests.length > 0 ?
        (
          ""
        )
        : 
        ("")}
    </div>
  );
}
