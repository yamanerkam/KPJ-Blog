import { useState, useEffect, useCallback } from "react";

const useFormatDate = () => {
    const [formattedDate, setFormattedDate] = useState('');

    const formatDate = useCallback((dateString) => {
        if (!dateString) {
            return '';
        }


        const [datePart, timePart] = dateString.split("T");
        const [year, month, day] = datePart.split("-");

        // Convert month number to name
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const monthName = monthNames[parseInt(month, 10) - 1];

        const formatted = `${monthName} ${day}, ${year}`;
        setFormattedDate(formatted);
        return formatted;
    }, []);

    return { formattedDate, formatDate };
};

export default useFormatDate;
