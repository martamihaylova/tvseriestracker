import api from './api'

export const getSomeSeries = () => {
    let series = [];
    for (let index = 0; index < 3; index++) {
        let seriesId = Math.round(Math.random() * (1000 - 1) + 1);
        fetch(api + seriesId)
            .then(res => res.json())
            .then(res => {
                series.push(res)
                // console.log(series);
            })
            .catch(err => console.log(err.message))
    }
   
    return series;
};