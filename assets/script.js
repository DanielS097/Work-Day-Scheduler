    const currentDate = dayjs();
    $("#currentDay").text(currentDate.format("D MMM YYYY HH:mm:ss"));

$(document).ready(function () {
    loadSavedData();