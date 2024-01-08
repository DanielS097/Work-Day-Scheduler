    const currentDate = dayjs();
    $("#currentDay").text(currentDate.format("D MMM YYYY HH:mm:ss"));

    $(document).ready(function () {
        loadSavedData();

    $(".saveBtn").on("click", function () {
        const timeBlock = $(this).closest(".time-block");
        const hour = timeBlock.find(".hour").text();
        const description = timeBlock.find(".description").val();
        saveToLocalStorage(hour, description);
        });