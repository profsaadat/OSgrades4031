async function loadCSV() {
    const response = await fetch('grades.csv');
    const data = await response.text();
    const rows = data.split('\n').map(row => row.split(','));
    return rows;
}

async function checkGrade() {
    const studentId = document.getElementById('studentId').value.trim();
    const resultElement = document.getElementById('result');
    
    if (!studentId) {
        resultElement.textContent = "لطفاً شماره دانشجویی را وارد کنید.";
        return;
    }

    const data = await loadCSV();
    const record = data.find(row => row[0] === studentId);

    if (record) {
        resultElement.textContent = `نمره شما: ${record[1]}`;
    } else {
        resultElement.textContent = "شماره دانشجویی پیدا نشد.";
    }
}
