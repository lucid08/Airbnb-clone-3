import countries from "world-countries";

const countryNames = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
}));