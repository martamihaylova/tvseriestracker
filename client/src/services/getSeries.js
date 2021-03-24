import { baseSeriesUrl, searchUrl } from './api'

export const getRandom = () => {
    let series = [];
    for (let index = 0; index < 3; index++) {
        let seriesId = Math.round(Math.random() * (1000 - 1) + 1);
        series.push(fetch(baseSeriesUrl + seriesId)
            .then((res) => res.json()));
    }
    let result = Promise.all(series);
    return result;
};
export const getOne = (id) => {
    return fetch(baseSeriesUrl + id)
        .then((res) => {
            return res.json()
        })
        .catch((err) => console.log(err));
}
export const handleSearch = (e) => {
    e.preventDefault();
        console.log(e.target.keyword.value)
    return fetch(searchUrl + e.target.keyword.value)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
}