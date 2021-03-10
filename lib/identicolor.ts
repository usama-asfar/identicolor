// @ts-ignore
import MD5 from './helpers/md5.gen';
import byte from './helpers/byte.con';

function identicolor(term: string) {
  const md5hash = MD5(term);
  const byteArray = byte(md5hash);

  const red = byteArray[0];
  const green = byteArray[1];
  const blue = byteArray[2];

  return [red, green, blue];
}

export default identicolor;
