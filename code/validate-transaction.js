/* 
validate-transaction.js
Validates data types, ranges and values.
*/

// Step 1
// Configuration
const raw_data = uploadButton.parsedValue[0]
const validated_data = []

const valid_dtypes = 
      {
        'ID': 'int',
        'Label': 'string',
        'Amount': 'float',
        'Date': 'date',
        'Description': 'string'
      }

const valid_range =
      {
        'Date': ['05/31/2019', '05/31/2022'],
        'Amount': [10, 20]
      }

const valid_set_member = 
      {
        'Label': ['Orange', 'Green']
      }


// Step 2
// Computation
for(var i=0; i<raw_data.length; i++){
  var row = raw_data[i];
  var valid = true;
  var error = '';
  
  var headers = Object.keys(raw_data[i]).sort().toString();
  var valid_headers = Object.keys(column_dtypes).sort().toString();

  // validate headers
  if(headers != valid_headers){
    row.valid = false;
    row.error = 'Invalid column headers.';
    validated_data.push(row);
  }
  
  // validate data types
  for(var key in column_dtypes){
    console.log(column_dtypes[key]);
  }
  
}