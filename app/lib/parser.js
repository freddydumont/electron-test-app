import LineByLineReader from 'line-by-line';

/**
 * Custom parser for line by line evaluation of non-standard CSV files
 * @param {string} filePath Path of the file to parse
 * @param {string} [output]
 *  default to split each line into an array of items,
 *  line for an array containing each line,
 *  categorized to use the first heading as categories to group objects with
 * @returns {Promise} Promise object representing parsed data or error
 */
function parser(filePath, output = 'default') {
  return new Promise((resolve, reject) => {
    // setup line reader with encoding and skip BOM by starting at byte 2
    const lr = new LineByLineReader(filePath, {
      encoding: 'utf16le',
      start: 2
    });
    // data structure depends on output
    const data = output === 'categorized' ? {} : [];

    // if requested output is line, only remove the extra "" and return an array
    if (output === 'line') {
      lr.on('line', line => {
        data.push(line.replace(/["]/g, ''));
      });
    } else {
      // default behavior removes extra "" and splits each line
      // returns an array of objects, using the first line as keys
      let headers = false;
      lr.on('line', line => {
        // remove extra " from all items and split into an array
        const lineArray = line.replace(/["]/g, '').split(',');

        // create headers with first line
        if (!headers) {
          headers = lineArray;
        } else {
          // use headers to create object for each line
          const obj = {};
          for (let i = 0; i < lineArray.length; i++) {
            // parse items as Number if possible, empty string returns 0
            obj[headers[i]] = Number.isNaN(Number(lineArray[i]))
              ? lineArray[i]
              : Number(lineArray[i]);
          }
          // push to data structure or format in categories
          if (output !== 'categorized') {
            data.push(obj);
          } else {
            const category = lineArray[0];
            const item = lineArray[1];

            // if category exists, store objects in it, else create category
            if (data[category]) {
              // store in category as item
              data[category][item] = obj;
            } else {
              // create category and item
              data[category] = {};
              data[category][item] = obj;
            }
          }
        }
      });
    }

    lr.on('error', err => reject(err));

    lr.on('end', () => resolve(data));
  });
}

export default parser;
