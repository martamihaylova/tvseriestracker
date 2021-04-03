import { baseSeriesUrl } from './api'

 const getUsersCollection = (idArray) => {
    let series = [];
    idArray.forEach((x) => {
        if(x.id){
            let show = fetch(baseSeriesUrl + x.id)
                .then((res) => res.json());
            series.push(show);
        }
    })

    let result = Promise.all(series);

    return result;
}
export default getUsersCollection;