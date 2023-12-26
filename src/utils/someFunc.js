
export const formatLargeNumber = (number)=> {
    if (number < 1e3) {
      return number;
    } else if (number < 1e6) {
      return (number / 1e3).toFixed(1) + 'K';
    } else if (number < 1e9) {
      return (number / 1e6).toFixed(1) + 'M';
    } else {
      return (number / 1e9).toFixed(1) + 'B';
    }
  }