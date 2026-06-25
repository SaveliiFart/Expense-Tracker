const monthNames = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
};

export const builtChartData = (data, title, color) => {
    return {
        title,
        color,
        labels: data.map(item => monthNames[item.month]),
        values: data.map(item => item.total)
    }
}