import { HiOutlineStar, HiStar } from "react-icons/hi2";
// import "./App.css";

const CurrencyDropdown = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handleFavorite,
  title = "",
}) => {
  const isFavorite = (curr) => favorites.includes(curr);

  return (
    <div className="currency-dropdown">
      <label htmlFor={title}>{title}</label>

      <div className="dropdown-container">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {favorites.map((currency) => (
            <option className="bg-gray-200" value={currency} key={currency}>
              {currency}
            </option>
          ))}
          <hr />
          {currencies
            .filter((c) => !favorites.includes(c))
            .map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
        </select>

        <button
          onClick={() => handleFavorite(currency)}
          className="favorite-button"
        >
          {isFavorite(currency) ? <HiStar /> : <HiOutlineStar />}
        </button>
      </div>
    </div>
  );
};
export default CurrencyDropdown;
