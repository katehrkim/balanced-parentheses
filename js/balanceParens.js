function balanceParens(str) {
  let output = '';
  let state = 'not_found';
  let bool_list = Array(str.length).fill('false');
  for (let i = 0; i < str.length; ++i) {
    if (state == 'not_found') {
      if (str[i] == '(') {
        state = 'found_left';
        bool_list[i] = 'maybe';
      }
      else if (str[i] == ')') {
        bool_list[i] = 'false';
      }
      else {
        bool_list[i] = 'true';
      }
    }
    else if (state == 'found_left') {
      if (str[i] == '(') {
        state = 'found_left';
        bool_list[i] = 'maybe';
      }
      else if (str[i] == ')') {
        bool_list[i] = 'true';
        j = i;
        while (bool_list[j] != 'maybe') {
          bool_list[j] = 'true';
          --j;
        }
        bool_list[j] = 'true';
        state = 'not_found';
      }
      else {
        bool_list[i] = 'true';
      }
    }
  }
  for (let i = 0; i < bool_list.length; ++i) {
    if (bool_list[i] == 'true') {
      output = output.concat(str[i]);
    }
  }
  return output;
};

module.exports = balanceParens;

// did not do the nested loop challenge