# Case Conversion Methods
'''
    capitalize()
    Capitalizes first letter of string

    casefold()
    Converts all uppercase letters in string to lowercase. Similar to lower(), but works on UNICODE characters alos

    lower()
    Converts all uppercase letters in string to lowercase.

    swapcase()
    Inverts case for all letters in string.

    title()
    Returns "titlecased" version of string, that is, all words begin with uppercase and the rest are lowercase.

    upper()
    Converts lowercase letters in string to uppercase.
'''

# Split and Join Methods
'''
    lstrip()
    Removes all leading whitespace in string.

    rstrip()
    Removes all trailing whitespace of string.

    strip()
    Performs both lstrip() and rstrip() on string

    rsplit()
    Splits the string from the end and returns a list of substrings

    split()
    Splits string according to delimiter (space if not provided) and returns list of substrings.

    splitlines()
    Splits string at NEWLINEs and returns a list of each line with NEWLINEs removed.

    partition()
    Splits the string in three string tuple at the first occurrence of separator

    rpartition()
    Splits the string in three string tuple at the ladt occurrence of separator

    join()
    Concatenates the string representations of elements in sequence into a string, with separator string.

    removeprefix()
    Returns a string after removing the prefix string

    removesuffix()
    Returns a string after removing the suffix string
'''

# Boolean String Methods
'''
    isalnum()
    Returns true if string has at least 1 character and all characters are alphanumeric and false otherwise.

    isalpha()
    Returns true if string has at least 1 character and all characters are alphabetic and false otherwise.

    isdigit()
    Returns true if the string contains only digits and false otherwise.

    islower()
    Returns true if string has at least 1 cased character and all cased characters are in lowercase and false otherwise.

    isnumeric()
    Returns true if a unicode string contains only numeric characters and false otherwise.

    isspace()
    Returns true if string contains only whitespace characters and false otherwise.

    istitle()
    Returns true if string is properly "titlecased" and false otherwise.

    isupper()
    Returns true if string has at least one cased character and all cased characters are in uppercase and false otherwise.

    isascii()
    Returns True is all the characters in the string are from the ASCII character set

    isdecimal()
    Checks if all the characters are decimal characters

    isidentifier()
    Checks whether the string is a valid Python identifier

    isprintable()
    Checks whether all the characters in the string are printable
'''

# Find and Replace Methods
'''
    count(sub, beg ,end)
    Counts how many times sub occurs in string or in a substring of string if starting index beg and ending index end are given.

    find(sub, beg, end)
    Determine if sub occurs in string or in a substring of string if starting index beg and ending index end are given returns index if found and -1 otherwise.

    index(sub, beg, end)
    Same as find(), but raises an exception if str not found.

    replace(old, new [, max])
    Replaces all occurrences of old in string with new or at most max occurrences if max given.

    rfind(sub, beg, end)
    Same as find(), but search backwards in string.

    rindex( sub, beg, end)
    Same as index(), but search backwards in string.

    startswith(sub, beg, end)
    Determines if string or a substring of string (if starting index beg and ending index end are given) starts with substring sub; returns true if so and false otherwise.

    endswith(suffix, beg, end)
    Determines if string or a substring of string (if starting index beg and ending index end are given) ends with suffix; returns true if so and false otherwise.
'''