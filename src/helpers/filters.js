const filters = {
  thousandsFilter(num) {

  const newNum = parseFloat(num).toFixed(2)

  const parts = (newNum).toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `$ ${parts.join('.')}`;
  }
}
export default filters;