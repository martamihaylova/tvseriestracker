import api from './api'

export const getSomeSeries = () => {
    let series = [];
    for (let index = 0; index < 3; index++) {
        let seriesId = Math.round(Math.random() * (1000 - 1) + 1);
        series.push(fetch(api + seriesId)
            .then((res) => res.json()));
    }
    let result = Promise.all(series);
    return result;
};