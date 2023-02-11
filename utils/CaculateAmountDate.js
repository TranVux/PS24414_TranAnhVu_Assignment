const A_DAY = 24 * 60 * 60 * 1000; // mili giấy nên phải nhân cho 1000
const A_MOUNTH = A_DAY * 30;

function CaculateAmountDate(createdAt) {
    let createDate = new Date(createdAt);
    let timeBetween = new Date().getTime() - createDate.getTime();
    let amountOfDate = timeBetween / A_DAY;
    if (amountOfDate < 30) {
        return { type: 'day', value: Math.round(amountOfDate) };
    } else if (amountOfDate >= 30 && (amountOfDate / 30) < 12) {
        return { type: 'months', value: Math.round(amountOfDate / 30) };
    } else {
        return { type: 'years', value: Math.round(amountOfDate / 30 / 12) }
    }
}

export default CaculateAmountDate;