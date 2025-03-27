let date = new Date();

function renderCalendar() {
    let year = date.getFullYear(), month = date.getMonth();
    let firstDay = new Date(year, month, 1).getDay();
    let lastDate = new Date(year, month + 1, 0).getDate();
    
    document.getElementById('monthYear').innerText = date.toLocaleString('default', { month: 'long', year: 'numeric' });

    let daysHTML = '';
    for (let i = 0; i < firstDay; i++) daysHTML += '<div></div>';
    for (let i = 1; i <= lastDate; i++) daysHTML += `<div class="day">${i}</div>`;
    
    document.getElementById('days').innerHTML = daysHTML;
}

function prevMonth() { 
    date.setMonth(date.getMonth() - 1); 
    renderCalendar(); 
}

function nextMonth() { 
    date.setMonth(date.getMonth() + 1); 
    renderCalendar(); 
}

renderCalendar();
