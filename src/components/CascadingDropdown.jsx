import { useState } from "react";

const COUNTRIES = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "Pak",
    value: "pk",
    cities: ["Lahore", "Karachi"],
  },
  {
    name: "Bangladesh",
    value: "BG",
    cities: ["Dhaka", "chittagong"],
  },
];

const CascadingDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    const selectedCity =
      COUNTRIES.find((country) => country.name === selectedCountry)
        ?.cities[0] || "";
    setSelectedCountry(selectedCountry);
    setSelectedCity(selectedCity);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const selectedCountryObj = COUNTRIES.find(
    (country) => country.name === selectedCountry
  );

  return (
    <div>
      <label>Select Country: </label>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select</option>
        {COUNTRIES.map((country) => (
          <option key={country.value} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      <label>Select City: </label>
      <select
        value={selectedCity}
        onChange={handleCityChange}
        disabled={!selectedCountry}
      >
        {selectedCountryObj &&
          selectedCountryObj.cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CascadingDropdown;
