import { baseSeriesUrl, searchUrl } from './api'

export const getSeries = (keyword = '') => {
    if (keyword !== '') {
        return fetch(searchUrl + keyword)
            .then((res) => res.json())
            .catch((err) => console.log(err));
    } else {
        let series = [];
        for (let index = 0; index < 3; index++) {
            let seriesId = Math.round(Math.random() * (1000 - 1) + 1);
            let show = fetch(baseSeriesUrl + seriesId)
                .then((res) => res.json())
                .then((res) => {
                   if(res.name === 'Not Found') {                      
                       index -= 1;
                       return;
                   } else {
                       return res;
                   }
                });
            series.push(show);
        }
        let result = Promise.all(series);
        return result;
    }
};

export const getOne = (id) => {
    return fetch(baseSeriesUrl + id)
        .then((res) => {
            return res.json()
        })
        .catch((err) => console.log(err));
}
