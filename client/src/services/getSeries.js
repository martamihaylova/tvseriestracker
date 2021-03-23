import { baseSeriesUrl } from './api'

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