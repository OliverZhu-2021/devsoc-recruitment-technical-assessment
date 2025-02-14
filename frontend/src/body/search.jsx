import styled from 'styled-components';
import filter from '../assets/filter.svg';
import search from '../assets/search-gray.svg';
import filterList from '../assets/filter-list.svg';
 
const SearchContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid var(--orange);
  height: 36px;
  padding: 4px 18px 8px 12px;
  margin: 12px 0 12px 20px;
  border-radius: 6px;
  img {
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }
  span {
    color: var(--orange);
    font-size: 14px;
    font-weight: bold;
    padding-top: 6px;
    margin-left: 4px;
  }
`;

const FilterListWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid var(--orange);
  height: 36px;
  padding: 4px 32px 8px 12px;
  border-radius: 6px;
  margin: 12px 20px 12px 0;
  img {
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }
  span {
    color: var(--orange);
    font-size: 14px;
    font-weight: bold;
    padding-top: 6px;
    margin-left: 4px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  width: 540px;
  border-radius: 4px;
  border: 2px solid #cccccc;
  img {
    margin: 0px 10px;
  }
  span {
    color: #d4d4d4;
  }
`;

const Search = () => {
  return(
    <SearchContainer>
      <FiltersWrapper>
        <img src={filter} alt="filter" />
        <span>Filters</span>
      </FiltersWrapper>
      <SearchBar>
        <img src={search} alt="search" />
        <span>Search for a building...</span>
      </SearchBar>
      <FilterListWrapper>
        <img src={filterList} alt="filter list" />
        <span>Sort</span>
      </FilterListWrapper>
    </SearchContainer>
  )
};

export default Search;