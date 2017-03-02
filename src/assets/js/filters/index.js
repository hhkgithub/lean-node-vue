/**
 * Created by hhkmac on 2017/2/6.
 */
export function toDate (val) {
  const d = new Date(val)
  const year = d.getFullYear();
  const month = (d.getMonth()+1) >= 10 ? (d.getMonth()+1) : '0'+(d.getMonth()+1);
  const day = d.getDate() >= 10 ? d.getDate() : '0'+d.getDate();;
  return year + '-' + month + '-' + day
}
