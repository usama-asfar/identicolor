// @ts-ignore
import MD5 from './utils/md5';
import byte from './utils/byte';

function identicolor(term: string) {
  const md5hash = MD5(term);
  const byteArray = byte(md5hash);

  const red = byteArray[0];
  const green = byteArray[1];
  const blue = byteArray[2];

  return [red, green, blue];
}

export default identicolor;
