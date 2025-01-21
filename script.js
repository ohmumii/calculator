let currentInput = "";

function appendValue(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    document.getElementById('display').value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
    } catch (e) {
        document.getElementById('display').value = "Error";
        currentInput = "";
    }
}

function sqrt() {
    try {
        currentInput = Math.sqrt(eval(currentInput)).toString();
        document.getElementById('display').value = currentInput;
    } catch (e) {
        document.getElementById('display').value = "Error";
        currentInput = "";
    }
}

// ฟังก์ชันจับการกดปุ่มจากคีย์บอร์ด
document.addEventListener('keydown', function (event) {
    const key = event.key;

    // ตรวจสอบว่าปุ่มที่กดเป็นตัวเลขหรือเครื่องหมายทางคณิตศาสตร์ที่รองรับ
    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '(' || key === ')' || key === '%') {
        appendValue(key); // เพิ่มค่าลงในจอแสดงผล
    }
    
    // สำหรับปุ่ม Enter ที่ทำงานเหมือนการกด =
    if (key === 'Enter') {
        calculate(); // คำนวณเมื่อกด Enter
    }
    
    // สำหรับปุ่ม Backspace ที่ทำงานเหมือนการลบตัวอักษรสุดท้าย
    else if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1); // ลบตัวอักษรสุดท้าย
        document.getElementById('display').value = currentInput;
    }
    
    // สำหรับปุ่ม ESC ที่ทำงานเหมือนการกด C (ลบหน้าจอ)
    else if (key === 'Escape') {
        clearDisplay(); // ล้างหน้าจอเมื่อกด ESC
    }
});