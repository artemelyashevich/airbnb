import countries from "world-countries";

export const useCountries = () => {
    const formattedCountries = countries.map((item) => ({
        value: item.cca2,
        label: item.name.common,
        flag: item.flag,
        latLang: item.latlng,
        region: item.region
    }))

    const getAllCountries = () => formattedCountries

    const getCountryByValue = (value: string) =>
        formattedCountries.find(item => item.value === value)

    return {
        getAllCountries,
        getCountryByValue
    }
}

