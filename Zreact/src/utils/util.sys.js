
/**
 * 获取时间间隔
 * @param startDate
 * @param endDate
 */
export function getTimeInterval(startDate, endDate = Date.now()) {
    if (arguments.length === 0) {
        return null
    }
    let startTime;
    let endTime;
    if (typeof startDate === 'object') {
        startTime = startDate.getTime();
    } else {
        startTime = startDate;
    }
    if (typeof endDate === 'object') {
        endTime = endDate.getTime();
    } else {
        endTime = endDate;
    }
    let dateInterval = endTime - startTime;
    // //计算出相差天数
    let days = Math.floor(dateInterval / (24 * 60 * 60 * 1000));
    //计算小时数
    let hourLevel = dateInterval % (24 * 60 * 60 * 1000);
    let hours = Math.floor(hourLevel / (60 * 60 * 1000))
    //计算分钟数
    let minutesLevel = hourLevel % (60 * 60 * 1000);
    let minutes = Math.floor(minutesLevel / (60 * 1000));
    //计算秒数
    let seconds = Math.round((minutesLevel % (60 * 1000)) / 1000);
    return `${days} 天 ${hours} 时 ${minutes} 分 ${seconds} 秒`;
}