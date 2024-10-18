export const romanToInt = (roman) => {
    const romanMap = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let intValue = 0;
  
    for (let i = 0; i < roman.length; i++) {
      let current = romanMap[roman[i]];
      let next = romanMap[roman[i + 1]];
  
      if (next > current) {
        intValue += (next - current);
        i++;
      } else {
        intValue += current;
      }
    }
  
    return intValue;
  };
  