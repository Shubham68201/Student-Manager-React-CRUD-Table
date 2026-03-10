import * as XLSX from 'xlsx';

export const exportToExcel = (students) => {
  const formattedData = students.map(({ id, name, email, age }) => ({
    ID: id,
    Name: name,
    Email: email,
    Age: age
  }));

  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const workbook = XLSX.utils.book_new();
  
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
  
  XLSX.writeFile(workbook, 'StudentsList.xlsx');
};
