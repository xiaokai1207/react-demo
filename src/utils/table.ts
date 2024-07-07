interface TableRow {
  id: number;
  [key: string]: any;
}

export function mergeTableCells(tableData: TableRow[]): TableRow[] {
  if (tableData.length === 0) return tableData;

  let currentId = tableData[0].id;
  let count = 0;

  for (let i = 0; i < tableData.length; i++) {
    if (tableData[i].id === currentId) {
      count++;
    } else {
      // Set the rowSpan for the previous group
      for (let j = i - count; j < i; j++) {
        tableData[j].rowSpan = j === i - count ? count : 0;
      }
      // Reset for the new group
      currentId = tableData[i].id;
      count = 1;
    }
  }

  // Set the rowSpan for the last group
  for (let i = tableData.length - count; i < tableData.length; i++) {
    tableData[i].rowSpan = i === tableData.length - count ? count : 0;
  }

  return tableData;
}