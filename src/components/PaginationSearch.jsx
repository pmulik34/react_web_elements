import { useState, useEffect } from "react";

const PaginationSearch = () => {
  const api = `https://dummyjson.com/products`;
  const limit = 6;

  const [posts, setPosts] = useState([]);
  const [thisPage, setThisPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortValue, setSortValue] = useState("asc");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(api);
    const data = await res.json();
    setPosts(data.products);
  };

  const loadItems = () => {
    const beginGet = limit * (thisPage - 1);
    const endGet = limit * thisPage - 1;

    const filteredPosts = posts.filter((el) =>
      el.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let sortedPosts = sortPosts(filteredPosts, sortValue);

    const paginatedPosts = sortedPosts.slice(beginGet, endGet + 1);

    return paginatedPosts.map((el, index) => <p key={index}>{el.title}</p>);
  };

  const sortPosts = (posts, sortValue) => {
    const sortedPosts = [...posts];
    sortedPosts.sort((a, b) => {
      if (sortValue === "asc") {
        return a.title.localeCompare(b.title);
      } else if (sortValue === "desc") {
        return b.title.localeCompare(a.title);
      }
    });
    return sortedPosts;
  };

  const listPagination = () => {
    const count = Math.ceil(posts.length / limit);

    const pages = [];

    if (thisPage !== 1) {
      pages.push(
        <li key="prev" onClick={() => changePage(thisPage - 1)}>
          PREV
        </li>
      );
    }

    for (let i = 1; i <= count; i++) {
      pages.push(
        <li
          key={i}
          className={i === thisPage ? "active" : ""}
          onClick={() => changePage(i)}
        >
          {i}
        </li>
      );
    }

    if (thisPage !== count) {
      pages.push(
        <li key="next" onClick={() => changePage(thisPage + 1)}>
          NEXT
        </li>
      );
    }

    return pages;
  };

  const changePage = (page) => {
    setThisPage(page);
  };

  return (
    <div>
      <input
        id="searchInput"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        id="sortSelect"
        value={sortValue}
        onChange={(e) => setSortValue(e.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <div id="container">{loadItems()}</div>
      <div id="listPage">{listPagination()}</div>
    </div>
  );
};

export default PaginationSearch;
