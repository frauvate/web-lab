import PyPDF2

try:
    reader = PyPDF2.PdfReader(r'd:\web-lab\task\lab3.pdf')
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
        
    with open(r'd:\web-lab\task\extracted_text.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Extraction successful")
except Exception as e:
    print(f"Error: {e}")
