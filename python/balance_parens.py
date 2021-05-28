def balance_parens(str):
    output = ''
    state = 'not_found'
    bool_list = [None] * len(str)
    for i in range(0, len(str)):
        if state == 'not_found':
            if str[i] == '(':
                state = 'found_left'
                bool_list[i] = 'maybe'
            elif str[i] == ')':
                bool_list[i] = False
            else:
                bool_list[i] = True
        elif state == 'found_left':
            if str[i] == '(':
                state = 'found_left'
                bool_list[i] = 'maybe'
            elif str[i] == ')':
                bool_list[i] = True
                j = i
                while (bool_list[j] != 'maybe'):
                    bool_list[j] = True
                    j = j - 1
                bool_list[j] = True
                state = 'not_found'
            else:
                bool_list[i] = True
    for i in range(0, len(bool_list)):
        if bool_list[i] == True:
            output = output + str[i]
    return output

    # Did not do challenge


