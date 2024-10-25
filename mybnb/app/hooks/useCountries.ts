import countries from "world-countries";

const countryNames = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
}));

const useCountries = () => {
    const getAll = () => countryNames;
    const getByValue = (value : string) => {
        return countryNames.find((country) => country.value === value);
    }
    return {
        getAll,
        getByValue,
    };
}

export default useCountries;