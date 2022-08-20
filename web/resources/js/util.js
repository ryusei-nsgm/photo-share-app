/**
 * クッキーの値を取得する
 * @param {String} searchKey 検索するキー
 * @returns {String} キーに対応する値
 */

export function getCookieValue(searchKey){
  if(typeof searchKey === 'undefined'){
    return ''
  }
  let val = ''

  // document.cookie => name=12345;token=67890;key=abcde
  // document.cookie.split(';') => [name=12345, token=67890, key=abcde]
  // coolie.split('=') => [key=>name, value=>12345]...
  document.cookie.split(';').forEach(cookie => {
    const [key, value] = cookie.split('=')
    if(key === searchKey){
      return val = value
    }
  })

  return val
}