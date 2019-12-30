const SPACEX_API='https://api.spacexdata.com/v3';
const LAUNCHES_PAST='/launches/past'
const LAUNCHES_UPCOMING='/launches/upcoming';
const FOOTER_INFO='/roadster';
const HEADER_INFO = '/info';


export function getPastLaunches(){
    return fetch(`${SPACEX_API}${LAUNCHES_PAST}`).then(res=> res.json());
}

export function getUpcomingLaunches(){
    return fetch(`${SPACEX_API}${LAUNCHES_UPCOMING}`).then(res=> res.json());
}

export function getFooterInfo(){
    return fetch(`${SPACEX_API}${FOOTER_INFO}`).then(res=> res.json());
}

export function getHeaderInfo(){
    return fetch(`${SPACEX_API}${HEADER_INFO}`).then(res=> res.json());
}