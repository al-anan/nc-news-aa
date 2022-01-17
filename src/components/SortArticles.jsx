import React from "react";

export const SortArticles = ({
  setSortBy,
  setOrder,
  selectedValue,
  setSelectedValue,
}) => {
  const handleSorting = (selectedOption) => {
    setSelectedValue(selectedOption);
    switch (selectedOption) {
      case "0":
        setSortBy("created_at");
        setOrder("desc");
        break;
      case "1":
        setSortBy("created_at");
        setOrder("asc");
        break;
      case "2":
        setSortBy("comment_count");
        setOrder("desc");
        break;
      case "3":
        setSortBy("comment_count");
        setOrder("asc");
        break;
      case "4":
        setSortBy("votes");
        setOrder("desc");
        break;
      case "5":
        setSortBy("votes");
        setOrder("asc");
        break;
      case "6":
        setSortBy("author");
        setOrder("asc");
        break;
      case "7":
        setSortBy("author");
        setOrder("desc");
        break;
      case "8":
        setSortBy("title");
        setOrder("asc");
        break;
      case "9":
        setSortBy("title");
        setOrder("desc");
        break;
      case "10":
        setSortBy("topic");
        setOrder("asc");
        break;
      case "11":
        setSortBy("topic");
        setOrder("desc");
        break;
    }
  };

  return (
    <div className="dropdown form-group">
      <label htmlFor="sort-articles">Sort articles:</label>
      <select
        class="form-control"
        id="sort-articles"
        value={selectedValue}
        onChange={(event) => handleSorting(event.target.value)}
      >
        <option value={0}>Newest first</option>
        <option value={1}>Oldest first</option>
        <option value={2}>Most commented</option>
        <option value={3}>Least commented</option>
        <option value={4}>Most voted</option>
        <option value={5}>Least voted</option>
        <option value={6}>By author: A-Z</option>
        <option value={7}>By author: Z-A</option>
        <option value={8}>By title: A-Z</option>
        <option value={9}>By title: Z-A</option>
        <option value={10}>By topic: A-Z</option>
        <option value={11}>By topic: Z-A</option>
      </select>
    </div>
  );
};
