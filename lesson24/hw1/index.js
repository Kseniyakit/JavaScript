export function getDiff (startDate, endDate){
    let diff = Math.abs(endDate - startDate);

    let sec = 1000;
    let min = 60 * 1000;
    let hour = 60 * 60 * 1000;
    let day = 24 * 60 * 60 * 1000;

    let daysDiff = Math.trunc(diff / day);
    let hoursDiff = Math.trunc((diff - (daysDiff * day)) / hour);
    let minDiff = Math.trunc(((diff - (daysDiff * day)) - (hoursDiff * hour)) / min);
    let secDiff = Math.trunc((((diff - (daysDiff * day)) - (hoursDiff * hour)) - (minDiff * min)) / sec);

    return `${daysDiff}d ${hoursDiff}h ${minDiff}m ${secDiff}s`;

}

console.log(getDiff(new Date(2018, 3, 10), new Date(2013,4,31)));