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

  @media (max-width: 594px) {
    height: 102px;
    flex-shrink: 0;
  }
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

  @media (max-width: 594px) {
    position: absolute;
    top: 56px;
    left: 0;
    margin: 0 0 0 20px;
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

  @media (max-width: 594px) {
    position: absolute;
    top: 56px;
    right: 0;
    margin: 0 20px 0 0;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  width: 520px;
  border-radius: 4px;
  border: 2px solid #cccccc;
  img {
    margin: 0px 10px;
  }
  span {
    color: #d4d4d4;
  }

  @media (max-width: 768px) {
    width: 320px;
  }

  @media (max-width: 594px) {
    position: absolute;
    top: 10px;
    margin: 0 20px;
    width: calc(100% - 40px);
  }
`;

/**
 * The search component
 * @returns A search section that contains the search bar and 2 filter buttons
 */
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