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

        function loadSavedData() {
            $(".time-block").each(function () {
                const hour = $(this).find(".hour").text();
                const savedDescription = localStorage.getItem(hour);
                $(this).find(".description").val(savedDescription);
            });
        }

        function saveToLocalStorage(hour, description) {
            localStorage.setItem(hour, description);
        }
    });